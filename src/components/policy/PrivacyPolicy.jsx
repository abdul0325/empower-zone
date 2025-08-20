import React from "react";
import { Shield, Lock, Eye, UserCheck, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4  mt-10 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#5E9EA8] rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-[#5E9EA8]" />
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Empower Zone ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our benefit assistance services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-[#5E9EA8]" />
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
                  <li>Full name, date of birth, and contact information</li>
                  <li>Social Security number and government identification</li>
                  <li>Income and employment information</li>
                  <li>Household composition and dependency information</li>
                  <li>Bank account and financial information (for benefit distribution)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Service Information</h3>
                <ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
                  <li>Benefit program applications and documentation</li>
                  <li>Communication records with government agencies</li>
                  <li>Case notes and progress updates</li>
                  <li>Authorization forms and consent documents</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-[#5E9EA8]" />
              How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#5E9EA8]/5 p-4 rounded-lg border border-[#5E9EA8]/20">
                <h3 className="font-semibold text-gray-800 mb-2">Service Provision</h3>
                <p className="text-gray-600 text-sm">
                  To prepare and submit benefit applications, communicate with government agencies on your behalf, and provide ongoing case management.
                </p>
              </div>
              <div className="bg-[#5E9EA8]/5 p-4 rounded-lg border border-[#5E9EA8]/20">
                <h3 className="font-semibold text-gray-800 mb-2">Communication</h3>
                <p className="text-gray-600 text-sm">
                  To respond to your inquiries, provide service updates, and send important information about your benefits and applications.
                </p>
              </div>
              <div className="bg-[#5E9EA8]/5 p-4 rounded-lg border border-[#5E9EA8]/20">
                <h3 className="font-semibold text-gray-800 mb-2">Legal Compliance</h3>
                <p className="text-gray-600 text-sm">
                  To comply with legal obligations, prevent fraud, and protect our rights and the rights of our clients.
                </p>
              </div>
              <div className="bg-[#5E9EA8]/5 p-4 rounded-lg border border-[#5E9EA8]/20">
                <h3 className="font-semibold text-gray-800 mb-2">Service Improvement</h3>
                <p className="text-gray-600 text-sm">
                  To analyze service usage patterns and improve our assistance programs and client experience.
                </p>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We only share your information with third parties in the following circumstances:
              </p>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li><strong>With Government Agencies:</strong> Only with your explicit authorization to process benefit applications</li>
                <li><strong>Service Providers:</strong> With trusted partners who assist us in providing services (e.g., document preparation, translation services)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulations</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and/or that of our clients</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-800 font-semibold mb-2">We implement robust security measures including:</p>
              <ul className="text-green-700 list-disc list-inside space-y-1 text-sm">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure document storage and access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on privacy and data protection</li>
                <li>Secure destruction of documents when no longer needed</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border-l-4 border-[#5E9EA8] pl-4">
                <h3 className="font-semibold text-gray-800">Access & Correction</h3>
                <p className="text-gray-600 text-sm mt-1">
                  You have the right to access and correct your personal information in our records.
                </p>
              </div>
              <div className="border-l-4 border-[#5E9EA8] pl-4">
                <h3 className="font-semibold text-gray-800">Data Portability</h3>
                <p className="text-gray-600 text-sm mt-1">
                  You can request a copy of your data in a machine-readable format.
                </p>
              </div>
              <div className="border-l-4 border-[#5E9EA8] pl-4">
                <h3 className="font-semibold text-gray-800">Withdraw Consent</h3>
                <p className="text-gray-600 text-sm mt-1">
                  You may withdraw consent for data processing at any time, subject to legal limitations.
                </p>
              </div>
              <div className="border-l-4 border-[#5E9EA8] pl-4">
                <h3 className="font-semibold text-gray-800">Deletion</h3>
                <p className="text-gray-600 text-sm mt-1">
                  You can request deletion of your data, except where we're required to retain it by law.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#5E9EA8]/5 rounded-lg p-6 border border-[#5E9EA8]/20">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#5E9EA8]" />
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or your personal information, please contact us:
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Email:</strong> EmpowerZoneServices@gmail.com</p>
              <p><strong>Phone:</strong> +1 (718) 757-6928</p>
              <p><strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Policy Updates</h3>
            <p className="text-blue-700 text-sm">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;