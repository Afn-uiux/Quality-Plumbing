'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface QuoteFormData {
  serviceType: 'residential' | 'commercial'
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serviceType, setServiceType] = useState<'residential' | 'commercial'>('residential')
  const { register, handleSubmit, reset, setValue, watch } = useForm<QuoteFormData>({
    defaultValues: {
      serviceType: 'residential',
      service: '',
    },
  })

  const selectedService = watch('service')

  const residentialServices = [
    'Leaky Faucets',
    'Pipe Repairs',
    'Water Heater Installation',
    'Drain Cleaning',
    'Toilet Repair',
    'Other',
  ]

  const commercialServices = [
    'Backflow Testing',
    'Grease Trap Cleaning',
    'Water Pressure Issues',
    'Commercial Plumbing Installation',
    'Maintenance Plans',
    'Other',
  ]

  const services =
    serviceType === 'residential' ? residentialServices : commercialServices

  const onSubmit = (data: QuoteFormData) => {
    console.log('Form submitted:', { ...data, serviceType })
    setSubmitted(true)
    reset()
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
      <h3 className="text-2xl font-bold text-primary mb-4 text-center">
        Get Your Free Quote
      </h3>

      {submitted && (
        <div className="mb-4 p-3 bg-green-50 text-green-800 rounded-lg text-sm">
          Thank you! We&apos;ll contact you soon with your quote.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Service Type Tabs */}
        <Tabs
          value={serviceType}
          onValueChange={(value) => {
            setServiceType(value as 'residential' | 'commercial')
            setValue('serviceType', value as 'residential' | 'commercial')
          }}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 bg-gray-100">
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Input
              placeholder="First Name"
              {...register('firstName', { required: true })}
              className="bg-gray-50 border-gray-200"
            />
          </div>
          <div>
            <Input
              placeholder="Last Name"
              {...register('lastName', { required: true })}
              className="bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        {/* Email */}
        <Input
          type="email"
          placeholder="eamin@grabui.com"
          {...register('email', { required: true })}
          className="bg-gray-50 border-gray-200"
        />

        {/* Phone */}
        <div className="flex gap-2">
          <Input
            placeholder="US"
            disabled
            className="w-16 bg-gray-100 border-gray-200"
          />
          <Input
            placeholder="+44(0)656 664 879"
            {...register('phone', { required: true })}
            className="flex-1 bg-gray-50 border-gray-200"
          />
        </div>

        {/* Service Selection */}
        <Select
          onValueChange={(value) => setValue('service', value)}
          value={selectedService || ''}
        >
          <SelectTrigger className="bg-gray-50 border-gray-200">
            <SelectValue placeholder="Select Service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11"
        >
          Get Free Quote
        </Button>
      </form>

      {/* Contact Info */}
      <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <span>📞</span>
          <a href="tel:816-555-0123" className="hover:underline">
            Emergency: 816-555-0123
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <span>🕐</span>
          <span>Working Hours: 7am-9pm</span>
        </div>
      </div>
    </div>
  )
}
