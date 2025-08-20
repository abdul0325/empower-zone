import React from "react";
import { FileText, Scale, Shield, AlertCircle, BookOpen, Clock } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#5E9EA8] rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
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
              <Scale className="w-6 h-6 text-[#5E9EA8]" />
              Agreement to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Empower Zone's benefit assistance services ("Services"), you agree to be bound by these Terms of Service and our Privacy Policy. These Terms govern your use of our Services and constitute a legal agreement between you and Empower Zone.
            </p>
          </div>

          {/* Services Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800">
                Empower Zone provides benefit assistance services including but not limited to:
              </p>
              <ul className="text-blue-700 list-disc list-inside space-y-2 mt-3">
                <li>SNAP (Food Stamps) application assistance</li>
                <li>Medicaid enrollment support</li>
                <li>Cash assistance program guidance</li>
                <li>WIC program applications</li>
                <li>Benefit denial appeals</li>
                <li>Authorized representation with government agencies</li>
              </ul>
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              We act as your authorized representative to facilitate benefit applications and communications with government agencies.
            </p>
          </div>

          {/* Client Responsibilities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#5E9EA8]" />
              Client Responsibilities
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Accurate Information</h3>
                <p className="text-gray-600 text-sm">
                  You must provide accurate, complete, and current information throughout the application process. You are responsible for the accuracy of all information provided to us.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">
                  You must provide all required documentation in a timely manner. Failure to provide necessary documents may delay or prevent benefit approval.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Cooperation</h3>
                <p className="text-gray-600 text-sm">
                  You agree to cooperate with our team and respond to requests for information or action within reasonable timeframes.
                </p>
              </div>
            </div>
          </div>

          {/* Fees and Payment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fees and Payment</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-2">Service Fees</h3>
                <p className="text-green-700 text-sm">
                  Our fees are clearly explained during the initial consultation. We offer affordable payment options and never charge hidden fees.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-gray-800 mb-2">Payment Terms</h3>
                <p className="text-green-700 text-sm">
                  Payment terms are outlined in your service agreement. We may require partial payment upfront with the balance due upon service completion.
                </p>
              </div>
            </div>
          </div>

          {/* Limitations */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-[#5E9EA8]" />
              Service Limitations
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-800 font-semibold mb-2">Important Limitations:</p>
              <ul className="text-yellow-700 list-disc list-inside space-y-2 text-sm">
                <li>We cannot guarantee benefit approval - final decisions rest with government agencies</li>
                <li>Processing times are determined by government agencies, not Empower Zone</li>
                <li>We are not government employees or affiliated with any government agency</li>
                <li>Our services are not legal advice - we provide application assistance and representation</li>
                <li>Eligibility determinations are made solely by government agencies</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All materials, processes, and methodologies developed by Empower Zone are our intellectual property. You may not reproduce, distribute, or use our materials without explicit written permission.
            </p>
          </div>

          {/* Confidentiality */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Confidentiality</h2>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <p className="text-purple-800 text-sm">
                We maintain strict confidentiality of all client information. Your personal and financial information is protected in accordance with our Privacy Policy and applicable laws.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <div className="space-y-3">
              <p className="text-gray-600">
                Either party may terminate services with written notice. Termination fees may apply if services are terminated after work has commenced.
              </p>
              <p className="text-gray-600 text-sm">
                We reserve the right to terminate services if you provide false information, fail to cooperate, or violate these Terms.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-800 font-semibold mb-2">General Disclaimer:</p>
              <p className="text-red-700 text-sm">
                Our services are provided "as is." We make no warranties regarding the outcome of benefit applications. While we strive for success, we cannot guarantee specific results as final determinations are made by government agencies.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed by the laws of the State of New York. Any disputes shall be resolved in the courts located in New York County.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#5E9EA8]" />
              Changes to Terms
            </h2>
            <p className="text-gray-600">
              We may update these Terms from time to time. Continued use of our Services after changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-[#5E9EA8]/5 rounded-lg p-6 border border-[#5E9EA8]/20">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#5E9EA8]" />
              Questions?
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Email:</strong> EmpowerZoneServices@gmail.com</p>
              <p><strong>Phone:</strong> +1 (718) 757-6928</p>
              <p><strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>

          {/* Acceptance */}
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-gray-700 text-sm">
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;