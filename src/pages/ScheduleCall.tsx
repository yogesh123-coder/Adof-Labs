import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const ScheduleCall = () => {
  const backgroundStyle = {
    background:
      "linear-gradient(145deg, #040609 0%, #05070c 25%, #06070e 50%, #070c14 100%)",
  };

  const Userinfo = z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    Email: z
      .string()
      .nonempty("Email is required")
      .email("Enter a valid email"),
    company: z.string().nonempty("Company is required"),
    projectDetails: z.string().min(5, "At least 5 words required"),
  });
  type Userinfo = z.infer<typeof Userinfo>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Userinfo>({
    resolver: zodResolver(Userinfo),
  });

  const onSubmit1: SubmitHandler<Userinfo> = (data) => {
    console.log(data);
    reset();
    toast.success("Your request has been submitted ");
  };

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-white font-space-grotesk text-4xl md:text-6xl font-light mb-6">
              Schedule Your Free Consultation
            </h1>
            <p className="text-white/80 font-poppins text-lg leading-relaxed max-w-2xl mx-auto">
              Ready to transform your digital assets? Book a 30-minute strategy
              session with our experts.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-white font-space-grotesk text-2xl mb-6">
              Contact Information
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit1)}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/70 font-poppins text-sm mb-2 block">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-2 font-inter">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white/70 font-poppins text-sm mb-2 block">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-2 font-inter">
                      {errors.lastName?.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-white/70 font-poppins text-sm mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  {...register("Email")}
                />
                {errors.Email && (
                  <p className="text-red-500 text-xs mt-2 font-inter">
                    {errors.Email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white/70 font-poppins text-sm mb-2 block">
                  Company
                </label>
                <Input
                  placeholder="Your Company Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  {...register("company")}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-2 font-inter">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-white/70 font-poppins text-sm mb-2 block">
                  Project Details
                </label>
                <Textarea
                  placeholder="Tell us about your digital transformation needs..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                  {...register("projectDetails")}
                />
                {errors.projectDetails && (
                  <p className="text-red-500 text-xs mt-2 font-inter">
                    {errors.projectDetails.message}
                  </p>
                )}
              </div>

              <Button
                className="w-full bg-white text-black hover:bg-gray-100 font-dm-mono uppercase tracking-wider"
                size="lg"
                type="submit"
              >
                Schedule Call
              </Button>
            </form>
          </div>

          {/* Right: Call Info */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-space-grotesk text-xl mb-6">
                What to Expect
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-space-grotesk text-lg mb-2">
                      30-Minute Strategy Session
                    </h4>
                    <p className="text-white/70 font-poppins text-sm leading-relaxed">
                      Focused discussion on your digital transformation goals
                      and challenges
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mt-1">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-space-grotesk text-lg mb-2">
                      Expert Consultation
                    </h4>
                    <p className="text-white/70 font-poppins text-sm leading-relaxed">
                      Direct access to our senior digital strategists and
                      platform architects
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mt-1">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-space-grotesk text-lg mb-2">
                      Custom Roadmap
                    </h4>
                    <p className="text-white/70 font-poppins text-sm leading-relaxed">
                      Personalized implementation plan tailored to your business
                      needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-space-grotesk text-xl mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-poppins text-sm">
                      +(91) 9752322070 +(91) 8398807544
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-poppins text-sm">
                      adoflabs@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-poppins text-sm">
                      Kailash Complex, Lal Bahadur Shastri Marg
                      <br />
                      <br />
                      Bhandup West, Mumbai, Maharashtra 400078
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://wa.me/message/JNSZQCPLZ4KNM1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Connect on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            {/* <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-white font-space-grotesk text-xl mb-6">Trusted By Leaders</h3>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-space-grotesk font-light text-white mb-1">500+</div>
                  <div className="text-white/60 font-poppins text-xs uppercase tracking-wide">Consultations</div>
                </div>
                <div>
                  <div className="text-2xl font-space-grotesk font-light text-white mb-1">98%</div>
                  <div className="text-white/60 font-poppins text-xs uppercase tracking-wide">Success Rate</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
