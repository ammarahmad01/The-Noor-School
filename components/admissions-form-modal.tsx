"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface AdmissionsFormModalProps {
  buttonText?: string
  buttonClassName?: string
}

export function AdmissionsFormModal({ buttonText = "Apply Now", buttonClassName }: AdmissionsFormModalProps) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    student_first_name: "",
    student_last_name: "",
    dob: "",
    gender: "",
    grade_applied_id: "",
    parent_name: "",
    parent_phone: "",
    parent_email: "",
    address_text: "",
    previous_school: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          grade_applied_id: formData.grade_applied_id || null,
          gender: formData.gender || null,
        }),
      })
      const result = await res.json()
      if (result.success) {
        toast.success("Application submitted! We'll review it shortly.")
        setFormData({
          student_first_name: "",
          student_last_name: "",
          dob: "",
          gender: "",
          grade_applied_id: "",
          parent_name: "",
          parent_phone: "",
          parent_email: "",
          address_text: "",
          previous_school: "",
          notes: "",
        })
        setOpen(false)
      } else {
        toast.error(result.error?.message || "Failed to submit application")
      }
    } catch (err) {
      toast.error("Error submitting application")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className={buttonClassName || "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-2xl">
        <DialogHeader>
          <DialogTitle>Admission Application Form</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Student Information */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Student Information</h3>
            <div className="grid grid-cols-2 gap-2">
              <Input
                name="student_first_name"
                value={formData.student_first_name}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              <Input
                name="student_last_name"
                value={formData.student_last_name}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Date of Birth"
              />
              <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="prefer_not_to_say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              name="previous_school"
              value={formData.previous_school}
              onChange={handleChange}
              placeholder="Previous School (Optional)"
            />
          </div>

          {/* Parent Information */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Parent Information</h3>
            <Input
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              placeholder="Parent/Guardian Name"
              required
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                name="parent_phone"
                value={formData.parent_phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
              <Input
                name="parent_email"
                type="email"
                value={formData.parent_email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <Input
              name="address_text"
              value={formData.address_text}
              onChange={handleChange}
              placeholder="Address (Optional)"
            />
          </div>

          {/* Additional */}
          <div className="space-y-2">
            <Textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional Information (Optional)"
              rows={3}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
