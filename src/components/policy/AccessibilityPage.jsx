import { Accessibility, Eye, Ear, Brain, Heart, Phone, Mail, Clock } from "lucide-react";

const AccessibilityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#5E9EA8] rounded-full flex items-center justify-center">
              <Accessibility className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Accessibility Statement
          </h1>
          <p className="text-lg text-gray-600">
            Committed to making benefits accessible to everyone
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          {/* Commitment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Commitment to Accessibility
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Empower Zone, we believe that everyone deserves equal access to government benefit programs. 
              We are dedicated to ensuring that our services are accessible to individuals with disabilities 
              and that we provide reasonable accommodations to meet diverse needs.
            </p>
          </div>

          {/* Accessibility Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Visual */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Visual Assistance</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Large print documents available</li>
                  <li>• High contrast communication options</li>
                  <li>• Screen reader compatible materials</li>
                  <li>• Braille materials upon request</li>
                </ul>
              </div>

              {/* Hearing */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <Ear className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Hearing Support</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Video relay services available</li>
                  <li>• Text-based communication options</li>
                  <li>• Sign language interpreters available</li>
                  <li>• Captioned phone services</li>
                </ul>
              </div>

              {/* Cognitive */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Cognitive Support</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Simplified language documents</li>
                  <li>• Step-by-step guidance</li>
                  <li>• Extended time for consultations</li>
                  <li>• Visual aids and checklists</li>
                </ul>
              </div>

              {/* Mobility */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center mb-4">
                  <Accessibility className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Mobility Accommodations</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Remote services available</li>
                  <li>• Home visits for qualified individuals</li>
                  <li>• Wheelchair accessible meeting locations</li>
                  <li>• Flexible scheduling options</li>
                </ul>
              </div>

              {/* Language */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Language Support</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Spanish language services</li>
                  <li>• Translation services available</li>
                  <li>• Bilingual staff members</li>
                  <li>• Multilingual documentation</li>
                </ul>
              </div>

              {/* Technology */}
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <div className="flex items-center mb-4">
                  <Phone className="w-8 h-8 text-teal-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Technology Access</h3>
                </div>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Phone-based services</li>
                  <li>• Email and text communication</li>
                  <li>• Video conference options</li>
                  <li>• Paper-based alternatives</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Request Accommodations */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requesting Accommodations</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-800 font-semibold mb-3">
                We encourage you to request accommodations in advance to ensure we can provide the best service possible.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">When Making an Appointment:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Inform us of any accessibility needs</li>
                    <li>• Specify preferred communication method</li>
                    <li>• Request specific accommodations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Types of Accommodations:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Alternative format documents</li>
                    <li>• Assistive technology support</li>
                    <li>• Service animal accommodations</li>
                    <li>• Personal care attendant support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Process */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feedback Process</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                We welcome feedback on our accessibility services. Your input helps us improve our accommodations.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#5E9EA8] rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-600 text-sm">
                    <strong>Email:</strong> Send accessibility feedback to EmpowerZoneServices@gmail.com
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#5E9EA8] rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-600 text-sm">
                    <strong>Phone:</strong> Call +1 (718) 757-6928 and ask to speak with our Accessibility Coordinator
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#5E9EA8] rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-600 text-sm">
                    <strong>Response Time:</strong> We aim to respond to accessibility feedback within 2 business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Improvement */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Improvement</h2>
            <div className="bg-[#5E9EA8]/10 rounded-lg p-6 border border-[#5E9EA8]/20">
              <p className="text-gray-700 mb-3">
                We are committed to continuously improving our accessibility services through:
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#5E9EA8] rounded-full mr-3"></div>
                  Regular staff training on accessibility best practices
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#5E9EA8] rounded-full mr-3"></div>
                  Ongoing review of accessibility policies and procedures
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#5E9EA8] rounded-full mr-3"></div>
                  Implementation of new assistive technologies
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#5E9EA8] rounded-full mr-3"></div>
                  Partnership with disability advocacy organizations
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#5E9EA8]/5 rounded-lg p-6 border border-[#5E9EA8]/20">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#5E9EA8]" />
              Accessibility Support
            </h2>
            <p className="text-gray-600 mb-4">
              Our Accessibility Coordinator is available to assist with accommodation requests and accessibility concerns.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Email:</strong> EmpowerZoneServices@gmail.com</p>
              <p><strong>Phone:</strong> +1 (718) 757-6928 (Voice)</p>
              <p><strong>TTY:</strong> Available through relay service</p>
              <p><strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>

          {/* Compliance Statement */}
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-gray-700 text-sm">
              Empower Zone is committed to compliance with the Americans with Disabilities Act (ADA) and 
              other applicable accessibility laws. We continually work to ensure our services are accessible to all individuals.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AccessibilityPage;