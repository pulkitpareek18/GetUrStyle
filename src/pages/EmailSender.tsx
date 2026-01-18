import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Lock, Upload, Send, Trash2, Paperclip, AlertCircle, CheckCircle, Loader2, Plus, User, Download } from 'lucide-react';

interface Recipient {
  name: string;
  email: string;
  company: string;
  [key: string]: string;
}

interface EmailStatus {
  email: string;
  status: 'pending' | 'sending' | 'sent' | 'failed';
  error?: string;
}

export function EmailSender() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [emailStatuses, setEmailStatuses] = useState<EmailStatus[]>([]);
  const [sendProgress, setSendProgress] = useState({ sent: 0, failed: 0, total: 0 });

  // Manual recipient entry
  const [manualName, setManualName] = useState('');
  const [manualEmail, setManualEmail] = useState('');
  const [manualCompany, setManualCompany] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const attachmentInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/verify-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setAuthError('');
      } else {
        setAuthError('Invalid password');
      }
    } catch {
      setAuthError('Authentication failed');
    }
  };

  const parseCSV = (text: string): Recipient[] => {
    const lines = text.trim().split('\n');
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const recipients: Recipient[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      const recipient: Recipient = { name: '', email: '', company: '' };

      headers.forEach((header, index) => {
        if (header.includes('name') && !header.includes('company')) {
          recipient.name = values[index] || '';
        } else if (header.includes('email')) {
          recipient.email = values[index] || '';
        } else if (header.includes('company')) {
          recipient.company = values[index] || '';
        } else {
          recipient[header] = values[index] || '';
        }
      });

      if (recipient.email) {
        recipients.push(recipient);
      }
    }

    return recipients;
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const parsed = parseCSV(text);
      setRecipients(parsed);
      setEmailStatuses(parsed.map(r => ({ email: r.email, status: 'pending' })));
    };
    reader.readAsText(file);
  };

  const handleAttachmentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setAttachments(prev => [...prev, ...Array.from(files)]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const removeRecipient = (index: number) => {
    setRecipients(prev => prev.filter((_, i) => i !== index));
    setEmailStatuses(prev => prev.filter((_, i) => i !== index));
  };

  const addManualRecipient = () => {
    if (!manualEmail.trim()) {
      alert('Email is required');
      return;
    }

    const newRecipient: Recipient = {
      name: manualName.trim(),
      email: manualEmail.trim(),
      company: manualCompany.trim(),
    };

    setRecipients(prev => [...prev, newRecipient]);
    setEmailStatuses(prev => [...prev, { email: newRecipient.email, status: 'pending' }]);

    // Clear inputs
    setManualName('');
    setManualEmail('');
    setManualCompany('');
  };

  const personalizeEmail = (template: string, recipient: Recipient): string => {
    let personalized = template;
    personalized = personalized.replace(/\{\{name\}\}/gi, recipient.name || 'there');
    personalized = personalized.replace(/\{\{first_name\}\}/gi, recipient.name?.split(' ')[0] || 'there');
    personalized = personalized.replace(/\{\{company\}\}/gi, recipient.company || 'your company');
    personalized = personalized.replace(/\{\{email\}\}/gi, recipient.email);

    // Replace any other custom fields
    Object.keys(recipient).forEach(key => {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'gi');
      personalized = personalized.replace(regex, recipient[key] || '');
    });

    return personalized;
  };

  const sendEmails = async () => {
    if (!subject || !emailBody || recipients.length === 0) {
      alert('Please fill in subject, email body, and add at least one recipient');
      return;
    }

    setIsSending(true);
    setSendProgress({ sent: 0, failed: 0, total: recipients.length });

    // Convert attachments to base64
    const attachmentData = await Promise.all(
      attachments.map(async (file) => {
        const base64 = await fileToBase64(file);
        return {
          filename: file.name,
          content: base64,
          contentType: file.type,
        };
      })
    );

    for (let i = 0; i < recipients.length; i++) {
      const recipient = recipients[i];

      setEmailStatuses(prev =>
        prev.map((s, idx) => idx === i ? { ...s, status: 'sending' } : s)
      );

      try {
        const personalizedSubject = personalizeEmail(subject, recipient);
        const personalizedBody = personalizeEmail(emailBody, recipient);

        const response = await fetch('/api/send-bulk-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            password,
            to: recipient.email,
            toName: recipient.name,
            subject: personalizedSubject,
            body: personalizedBody,
            attachments: attachmentData,
          }),
        });

        if (response.ok) {
          setEmailStatuses(prev =>
            prev.map((s, idx) => idx === i ? { ...s, status: 'sent' } : s)
          );
          setSendProgress(prev => ({ ...prev, sent: prev.sent + 1 }));
        } else {
          const error = await response.json();
          setEmailStatuses(prev =>
            prev.map((s, idx) => idx === i ? { ...s, status: 'failed', error: error.message } : s)
          );
          setSendProgress(prev => ({ ...prev, failed: prev.failed + 1 }));
        }
      } catch (err) {
        setEmailStatuses(prev =>
          prev.map((s, idx) => idx === i ? { ...s, status: 'failed', error: 'Network error' } : s)
        );
        setSendProgress(prev => ({ ...prev, failed: prev.failed + 1 }));
      }

      // Add delay between emails to avoid rate limiting
      if (i < recipients.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
    }

    setIsSending(false);
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]);
      };
      reader.onerror = reject;
    });
  };

  document.title = 'Email Sender - GetUrStyle';

  if (!isAuthenticated) {
    return (
      <div className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
              <div className="text-center mb-8">
                <Lock className="text-blue-500 mx-auto mb-4" size={48} />
                <h1 className="text-2xl font-bold">Admin Access Required</h1>
                <p className="text-gray-400 mt-2">Enter password to access email sender</p>
              </div>

              <form onSubmit={handleLogin}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white mb-4 focus:border-blue-500 focus:outline-none"
                />
                {authError && (
                  <p className="text-red-400 text-sm mb-4 flex items-center gap-2">
                    <AlertCircle size={16} />
                    {authError}
                  </p>
                )}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Access Email Sender
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-2">Bulk Email Sender</h1>
          <p className="text-gray-400 mb-8">Send personalized cold emails to founders</p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Email Composition */}
            <div className="space-y-6">
              {/* Recipients Section */}
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <User size={20} className="text-blue-500" />
                  Add Recipients
                </h2>

                {/* Manual Entry */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-3">Add manually:</p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={manualName}
                      onChange={(e) => setManualName(e.target.value)}
                      placeholder="Name"
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      value={manualEmail}
                      onChange={(e) => setManualEmail(e.target.value)}
                      placeholder="Email *"
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:border-blue-500 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={manualCompany}
                      onChange={(e) => setManualCompany(e.target.value)}
                      placeholder="Company"
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white text-sm focus:border-blue-500 focus:outline-none"
                    />
                    <button
                      onClick={addManualRecipient}
                      className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus size={16} />
                      Add Recipient
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-gray-700"></div>
                  <span className="text-gray-500 text-sm">OR</span>
                  <div className="flex-1 h-px bg-gray-700"></div>
                </div>

                {/* CSV Upload */}
                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-400 text-sm">Upload CSV file:</p>
                  <button
                    onClick={() => {
                      const csvContent = 'name,email,company\nJohn Doe,john@example.com,Acme Inc\nJane Smith,jane@startup.io,StartupCo';
                      const blob = new Blob([csvContent], { type: 'text/csv' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'email-recipients-template.csv';
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                  >
                    <Download size={14} />
                    Download Template
                  </button>
                </div>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleCSVUpload}
                  ref={fileInputRef}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors"
                >
                  <Upload className="mx-auto mb-2 text-gray-400" size={24} />
                  <p className="text-gray-400 text-sm">Click to upload CSV</p>
                  <p className="text-gray-600 text-xs mt-1">Columns: name, email, company</p>
                </button>

                {recipients.length > 0 && (
                  <p className="text-green-400 mt-4 flex items-center gap-2">
                    <CheckCircle size={16} />
                    {recipients.length} recipient{recipients.length !== 1 ? 's' : ''} added
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Email Subject</h2>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Quick question about {{company}}"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none"
                />
                <p className="text-gray-500 text-xs mt-2">
                  Use {'{{name}}'}, {'{{first_name}}'}, {'{{company}}'}, {'{{email}}'} for personalization
                </p>
              </div>

              {/* Email Body */}
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Email Body</h2>
                <textarea
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  placeholder={`Hi {{first_name}},

Saw {{company}} and wanted to reach out...

Best,
Your Name`}
                  rows={12}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none font-mono text-sm"
                />
              </div>

              {/* Attachments */}
              <div className="bg-black/50 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Paperclip size={20} className="text-blue-500" />
                  Attachments
                </h2>
                <input
                  type="file"
                  multiple
                  onChange={handleAttachmentUpload}
                  ref={attachmentInputRef}
                  className="hidden"
                />
                <button
                  onClick={() => attachmentInputRef.current?.click()}
                  className="w-full border border-gray-700 rounded-lg p-3 text-center hover:border-blue-500 transition-colors text-gray-400 text-sm"
                >
                  + Add attachments (same for all recipients)
                </button>
                {attachments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {attachments.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-black/50 rounded-lg p-3">
                        <span className="text-sm text-gray-300 truncate">{file.name}</span>
                        <button
                          onClick={() => removeAttachment(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Send Button */}
              <motion.button
                onClick={sendEmails}
                disabled={isSending || recipients.length === 0 || !subject || !emailBody}
                whileHover={{ scale: isSending ? 1 : 1.02 }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
                className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending... ({sendProgress.sent + sendProgress.failed}/{sendProgress.total})
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send to {recipients.length} Recipients
                  </>
                )}
              </motion.button>

              {sendProgress.total > 0 && !isSending && (
                <div className="bg-black/50 border border-gray-800 rounded-lg p-4">
                  <p className="text-green-400">Sent: {sendProgress.sent}</p>
                  <p className="text-red-400">Failed: {sendProgress.failed}</p>
                </div>
              )}
            </div>

            {/* Right Column - Recipients List */}
            <div className="bg-black/50 border border-gray-800 rounded-xl p-6 h-fit max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Recipients ({recipients.length})</h2>
              {recipients.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Add recipients manually or upload a CSV</p>
              ) : (
                <div className="space-y-2">
                  {recipients.map((recipient, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg border ${
                        emailStatuses[index]?.status === 'sent'
                          ? 'border-green-500/30 bg-green-500/5'
                          : emailStatuses[index]?.status === 'failed'
                          ? 'border-red-500/30 bg-red-500/5'
                          : emailStatuses[index]?.status === 'sending'
                          ? 'border-blue-500/30 bg-blue-500/5'
                          : 'border-gray-800'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{recipient.name || 'No name'}</p>
                        <p className="text-gray-400 text-xs truncate">{recipient.email}</p>
                        <p className="text-gray-500 text-xs truncate">{recipient.company}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        {emailStatuses[index]?.status === 'sent' && (
                          <CheckCircle size={16} className="text-green-500" />
                        )}
                        {emailStatuses[index]?.status === 'failed' && (
                          <AlertCircle size={16} className="text-red-500" title={emailStatuses[index]?.error} />
                        )}
                        {emailStatuses[index]?.status === 'sending' && (
                          <Loader2 size={16} className="text-blue-500 animate-spin" />
                        )}
                        {!isSending && (
                          <button
                            onClick={() => removeRecipient(index)}
                            className="text-gray-500 hover:text-red-400"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
