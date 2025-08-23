"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone } from "lucide-react"
import dynamic from "next/dynamic"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"

const MapComponent = dynamic(() => import("./map-component"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
      <div className="text-center">
        <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Loading map...</p>
      </div>
    </div>
  ),
})

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    businessNeed: "",
    message: "",
  })

  const [showSuccess, setShowSuccess] = useState(false)

  // Replace "xyzpqaoe" with your real Formspree form ID
  const [state, handleSubmit] = useForm("xnnzegbk")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Clear form & show success alert when submission succeeds
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        fullName: "",
        company: "",
        email: "",
        businessNeed: "",
        message: "",
      })
      setShowSuccess(true)
      const timer = setTimeout(() => setShowSuccess(false), 4000) // auto-hide after 4s
      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-background to-muted/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to harness the power of AI? Let&apos;s discuss how Rational IT Services can build intelligent solutions for
            your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side: Map + Info */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden shadow-lg">
              <div className="h-[400px] w-full z-0">
                <MapComponent />
              </div>
            </Card>

            <Card className="mt-6 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">info@rationalitservices.com</p>
                    <p className="text-sm text-muted-foreground">Email us anytime</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">640.229.2293</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">United States & Canada</p>
                    <p className="text-sm text-muted-foreground">Serving clients nationwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side: Form */}
          <div className="order-1 lg:order-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {showSuccess && (
                  <Alert className="mb-6 border-green-500 bg-green-50 text-green-800">
                    <CheckCircle2 className="h-5 w-5" />
                    <AlertTitle>Message Sent!</AlertTitle>
                    <AlertDescription>
                      Thanks for reaching out. We’ll get back to you shortly.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                      <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Enter your company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessNeed">Business Need</Label>
                    <Select
                      value={formData.businessNeed}
                      onValueChange={(value) => handleInputChange("businessNeed", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary need" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strategy">AI Strategy & Consulting</SelectItem>
                        <SelectItem value="nlp">Natural Language Processing</SelectItem>
                        <SelectItem value="cv">Computer Vision</SelectItem>
                        <SelectItem value="analytics">Data Analytics & ML</SelectItem>
                        <SelectItem value="automation">Process Automation</SelectItem>
                        <SelectItem value="integration">System Integration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#571d8c]/90 hover:bg-[#571d8c] cursor-pointer"
                    size="lg"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
