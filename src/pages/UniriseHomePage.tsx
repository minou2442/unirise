import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";
import { ChevronDown, Calendar, Users, BookOpen, Award, GraduationCap, MapPin } from "lucide-react";
import doha from '../assets/doha.jpg';
import niss from '../assets/niss.jpg';
import mariam from '../assets/mariem.jpg';
import oum from '../assets/oum.jpg';
import me from '../assets/me.jpg';
import rayan from '../assets/rayan.jpg';
import v1 from '../assets/v1.jpg';
import v2 from '../assets/v2.jpg';
import v3 from '../assets/v3.jpg';
import { supabase, Registration } from "../lib/supabase";

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  image?: string;
}

interface EventPhoto {
  src: string;
  alt: string;
}

export default function UniriseHomePage() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<Registration>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: Registration) => {
    try {
      const { error } = await supabase
        .from('registrations')
        .insert([data]);

      if (error) throw error;

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting registration:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [eventRef, eventInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const teamMembers: TeamMember[] = [
    { 
      name: "RAYAN ZEBIRI", 
      role: "President,Founder", 
      desc: "Law student",
      image: rayan
    },
    { 
      name: "DOHA BOUALI", 
      role: "Vice president", 
      desc: "Math Student at NHSM",
     image: doha  },
    { 
      name: "AYMEN BOUMEZBEUR", 
      role: "Information technology lead", 
      desc: "Computer Science Student",
      image: me
    },
    { 
      name: "AGUIS MARIEM AYA", 
      role: "External Relations lead", 
      desc: "Marketing student",
      image: mariam
    },
    { 
      name: "OUMEIMA BOULTIF", 
      role: "Multi-media lead", 
      desc: "Civil Engineering Student",
      image:oum
    },
    { 
      name: "ANIS ZAIMEN", 
      role: "Graphic Designer", 
      desc: "Electronics Student",
      image: niss
    },
  ];

  const eventPhotos: EventPhoto[] = [
    { 
      src: v1, 
      alt: "Students during presentation" 
    },
    { 
      src: v2 ,
      alt: "Group discussion" 
    },
    { 
      src: v3,
      alt: "Team collaboration" 
    },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "1000+", label: "Students Advised" },
    { icon: <Calendar className="w-8 h-8" />, value: "1", label: "Events Organized" },
    { icon: <BookOpen className="w-8 h-8" />, value: "20+", label: "Specializations Covered" },
    { icon: <Award className="w-8 h-8" />, value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="bg-[#0f0f0f] text-white font-sans pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDEwMG0tMTAwIDBhMTAwIDEwMCAwIDEgMCAyMDAgMGExMDAgMTAwIDAgMSAwIC0yMDAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmJiZjI0IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIyIiAvPjwvc3ZnPg==')] bg-repeat opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerChildren}
              className="space-y-6"
            >
              <motion.div 
                variants={fadeInUpVariants}
                transition={{ duration: 0.6 }}
                className="inline-block bg-yellow-400 text-black font-medium px-4 py-1 rounded-full mb-2"
              >
                <span className="flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  El Milia, Jijel
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeInUpVariants}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Guiding Students Toward <span className="text-yellow-400">Academic Success</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUpVariants}
                transition={{ duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
              >
                An educational awareness initiative helping students make informed academic choices and navigate their university journey with confidence.
              </motion.p>

              <motion.div 
                variants={fadeInUpVariants}
                transition={{ duration: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              >
                <a 
                  href="#register" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                >
                  Register Now
                </a>
                <a 
                  href="#about" 
                  className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <a href="#about" className="text-white/70 hover:text-white">
              <ChevronDown className="w-10 h-10" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-24 relative"
        id="about"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeInUpVariants} 
              className="text-yellow-400 font-medium text-lg mb-4"
            >
              Who We Are
            </motion.div>
            
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              About Unirise El-Milia
            </motion.h2>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <p className="text-gray-300">
                  Unirise is an initiative organized by a group of passionate university students aiming to guide high school graduates and new university students in their academic journey.
                </p>
                <p className="text-gray-300">
                  Located in El Milia, Jijel, we aim to provide consultations, support, and advice to help students choose the right specializations and adapt to university life.
                </p>
                <p className="text-gray-300">
                  Our mission is to bridge the information gap between high school and university, ensuring students make informed decisions about their academic future.
                </p>
                <a href="#register" className="inline-block text-yellow-400 hover:text-yellow-300 font-medium">
                  Join our next event →
                </a>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 h-full">
                <h3 className="font-bold text-xl mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-yellow-400/20 rounded-full p-2 h-min">
                      <Award className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Academic Excellence</h4>
                      <p className="text-gray-400 text-sm">Promoting informed academic choices that align with students' strengths and interests.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-yellow-400/20 rounded-full p-2 h-min">
                      <Users className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Community Support</h4>
                      <p className="text-gray-400 text-sm">Building a supportive network for students transitioning to university life.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-yellow-400/20 rounded-full p-2 h-min">
                      <BookOpen className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Knowledge Sharing</h4>
                      <p className="text-gray-400 text-sm">Facilitating the exchange of experiences and insights among students.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              variants={fadeInUpVariants}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 rounded-lg p-6 text-center"
                >
                  <div className="text-yellow-400 flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section 
        ref={eventRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
        id="event"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={eventInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="max-w-5xl mx-auto"
          >
            <motion.div 
              variants={fadeInUpVariants} 
              className="text-yellow-400 font-medium text-lg mb-4 text-center"
            >
              Our Impact
            </motion.div>
            
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Recent Events & Activities
            </motion.h2>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Educational Event at Mohammed Seddik Ben Yahya High School
                </h3>
                <p className="text-gray-300 mb-6">
                  Our flagship event brought together experienced university students who shared valuable insights to help guide new students in making informed decisions about their academic future.
                </p>
                <p className="text-gray-300 mb-6">
                  The Event covered various specializations, university life expectations, and strategies for academic success. Students had the opportunity to ask questions and receive personalized advice.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-yellow-400/20 rounded-full p-2 mr-3">
                      <Calendar className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span>july 26, 2024 </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-yellow-400/20 rounded-full p-2 mr-3">
                      <Users className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span>60+ Attendees</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {eventPhotos.slice(0, 4).map((photo, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUpVariants}
                    transition={{ delay: 0.2 * index }}
                    className={`overflow-hidden rounded-lg ${index === 0 ? 'col-span-2' : ''}`}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                      style={{ aspectRatio: index === 0 ? '16/9' : '1/1' }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className="py-24 bg-[#0f0f0f]"
        id="team"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerChildren}
          >
            <motion.div 
              variants={fadeInUpVariants} 
              className="text-yellow-400 font-medium text-lg mb-4 text-center"
            >
              Meet Our Team
            </motion.div>
            
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
            >
              The Minds Behind Unirise
            </motion.h2>
            
            <motion.p 
              variants={fadeInUpVariants}
              className="text-gray-300 mb-12 text-center max-w-2xl mx-auto"
            >
              Our dedicated team of university students is committed to helping others navigate their academic journey successfully.
            </motion.p>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUpVariants}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/5 transition-all duration-300 hover:-translate-y-2"
                >
                  {member.image && (
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-yellow-400">{member.name}</h3>
                    <p className="text-white font-medium">{member.role}</p>
                    <p className="text-gray-400 mt-2">{member.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Registration Section */}
      <section 
        ref={formRef}
        className="py-24 bg-gradient-to-b from-yellow-400 to-yellow-500 text-black"
        id="register"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUpVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Next Event</h2>
              <p className="text-black/80 max-w-2xl mx-auto">
                Register now to secure your spot at our upcoming educational workshop. Get personalized guidance and connect with experienced students.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6">Register Now</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        {...register("name")} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all" 
                        placeholder="Your full name" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        {...register("email")} 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all" 
                        placeholder="Your email address" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        {...register("phone")} 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all" 
                        placeholder="Your phone number" 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Educational Level</label>
                      <select 
                        {...register("education_level")} 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                        required
                      >
                        <option value="">Select your level</option>
                        <option value="high-school">High School Student</option>
                        <option value="bac">Baccalaureate Holder</option>
                        <option value="university">University Student</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">What topics are you interested in?</label>
                      <textarea 
                        {...register("interests")} 
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all" 
                        placeholder="Tell us what you'd like to learn"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:shadow-lg ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-yellow-400 hover:bg-yellow-500 text-black'
                      }`}
                    >
                      {isSubmitting ? 'Registering...' : 'Register for Event'}
                    </button>

                    {submitStatus === 'success' && (
                      <div className="text-green-600 text-center mt-4">
                        Registration successful! We'll contact you soon.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="text-red-600 text-center mt-4">
                        There was an error submitting your registration. Please try again.
                      </div>
                    )}
                  </form>
                </div>
                
                <div className="bg-gray-900 p-8 md:p-12 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-6">Event Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Calendar className="w-6 h-6 text-yellow-400 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium">Date & Time</h4>
                        <p className="text-gray-300">August 15, 2024 • 10:00 AM - 3:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-yellow-400 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-gray-300">Mohammed Seddik Ben Yahya High School, El Milia, Jijel</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-yellow-400 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium">Who Should Attend</h4>
                        <p className="text-gray-300">High school graduates, new university students, and anyone interested in educational guidance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Award className="w-6 h-6 text-yellow-400 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium">What You'll Get</h4>
                        <p className="text-gray-300">Personalized academic guidance, networking opportunities, and educational resources</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-yellow-400 font-medium text-lg mb-4">Success Stories</div>
            <h2 className="text-3xl md:text-4xl font-bold">What Students Say About Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Amel Khaled",
                role: "Medical Student",
                quote: "بفضل توجيهات Unirise، خترت الطريق الصح في دراستي فالطب. نصائحهم عاونوني بزاف فالمسيرة الدراسية دياليy.",
                image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "Mohammed Benali",
                role: "Engineering Student",
                quote: "ليكيب تاع Unirise فهّمتني واش يلزم للهندسة وورّاو لي كيفاش ندير باش نسجّل",
                image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "Lina Hadj",
                role: "Computer Science Student",
                quote: "كنت حاير في الطريق لي نديها بعد الثانوي. حدث Unirise وضح لي الخيارات ديالي وساعدني نختار علوم الكمبيوتر",
                image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-xl relative"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-4 border-black">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                  <h4 className="font-bold text-yellow-400">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
