"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  Check,
  Utensils,
  Clock,
  Truck,
  Star,
  ChevronDown,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="text-2xl font-bold text-emerald-600">NutriHome</div>
        <div className="space-x-4">
          <a
            href="#"
            className="text-zinc-600 transition hover:text-emerald-600"
          >
            Features
          </a>
          <a
            href="#"
            className="text-zinc-600 transition hover:text-emerald-600"
          >
            Plans
          </a>
          <a
            href="#"
            className="text-zinc-600 transition hover:text-emerald-600"
          >
            About
          </a>
        </div>
        <button className="rounded-full bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700">
          Login
        </button>
      </nav>

      <header className="container mx-auto px-4 py-20 text-center">
        <motion.h1
          className="mb-4 text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Delicious, Homemade Meals
          <br />
          Delivered to Your Door
        </motion.h1>
        <motion.p
          className="mb-8 text-xl text-zinc-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enjoy nutritious, chef-prepared meals tailored to your needs.
          <br />
          Perfect for those who can't cook or don't have time to prepare meals.
        </motion.p>
        <motion.button
          className="mx-auto flex items-center rounded-full bg-emerald-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <ChevronRight className="ml-2" />
        </motion.button>
      </header>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Select Your Plan",
                icon: Utensils,
                description:
                  "Choose from our flexible meal plans tailored to your needs and preferences.",
              },
              {
                title: "We Cook",
                icon: Clock,
                description:
                  "Our expert chefs prepare delicious, nutritious meals using fresh, high-quality ingredients.",
              },
              {
                title: "We Deliver",
                icon: Truck,
                description:
                  "Enjoy convenient delivery right to your doorstep at your preferred times.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-zinc-100 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-zinc-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Us
          </h2>
          <div className="mx-auto max-w-2xl">
            {[
              "Fresh, locally-sourced ingredients for maximum nutrition and flavor",
              "Customizable meal plans to fit your dietary needs and preferences",
              "Convenient delivery schedules that work around your lifestyle",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mb-6 flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Check className="mr-4 h-6 w-6 flex-shrink-0 text-emerald-600" />
                <p className="text-lg text-zinc-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PlansSection />
      <ReviewsSection />
      <FAQSection />

      <footer className="bg-zinc-800 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2024 NutriHome. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="transition hover:text-emerald-400">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-emerald-400">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-emerald-400">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const faqs = [
    {
      question: "How does your meal delivery service work?",
      answer:
        "Our service provides freshly prepared, nutritious meals delivered directly to your door. You choose a plan that fits your needs, select your meals from our diverse menu, and we take care of the rest. Our chefs prepare your meals using high-quality ingredients, and they're delivered to you on your chosen schedule.",
    },
    {
      question: "Can I customize my meals to fit my dietary requirements?",
      answer:
        "Absolutely! We offer a wide range of customization options to cater to various dietary needs and preferences. Whether you're vegetarian, vegan, gluten-free, or have specific allergies, we can accommodate your requirements. You can easily specify your dietary preferences when selecting your meals.",
    },
    {
      question: "How far in advance do I need to order my meals?",
      answer:
        "To ensure the freshest ingredients and optimal preparation time, we require orders to be placed at least 48 hours in advance. This allows our chefs to source the best ingredients and prepare your meals with care. You can easily schedule your meals for the entire week or month in advance through our user-friendly online platform.",
    },
    {
      question: "What measures do you take to ensure food safety and quality?",
      answer:
        "Food safety and quality are our top priorities. We adhere to strict food safety protocols in our state-of-the-art kitchen facilities. All our chefs and staff are trained in food safety practices. We use high-quality, fresh ingredients, and our meals are prepared in a controlled environment. Additionally, our packaging is designed to maintain the freshness and integrity of your meals during delivery.",
    },
    {
      question: "Can I pause or cancel my subscription at any time?",
      answer:
        "Yes, we offer flexible subscription management. You can pause your subscription for up to 4 weeks if you're going on vacation or need a break. If you wish to cancel your subscription, you can do so at any time through your account settings. We just ask for a 7-day notice to process the cancellation and adjust our meal preparation accordingly.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-zinc-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-zinc-800">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className={`flex w-full items-center justify-between rounded-lg bg-white p-5 text-left shadow-md transition-all duration-300 hover:shadow-lg ${activeIndex === index && "rounded-b-none"}`}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="text-lg font-semibold text-zinc-800">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-6 w-6 text-emerald-600" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="rounded-b-lg bg-white px-5 py-4 shadow-md">
                      <p className="text-zinc-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      comment:
        "The meals are delicious and so convenient. It's changed my life!",
    },
    {
      name: "John D.",
      rating: 4,
      comment: "Great variety and the portions are perfect. Highly recommend.",
    },
    {
      name: "Emily L.",
      rating: 5,
      comment:
        "As a busy professional, this service has been a game-changer for me.",
    },
  ];

  return (
    <section className="bg-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 text-zinc-600">"{review.comment}"</p>
              <p className="font-semibold">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Improved Plans Section
const PlansSection = () => {
  const plans = [
    {
      title: "Basic",
      price: 450000,
      meals: 2,
      features: [
        "Limited menu options",
        "Weekday delivery",
        "Basic customization",
      ],
    },
    {
      title: "Pro",
      price: 600000,
      meals: 3,
      features: [
        "Extended menu options",
        "7-day delivery",
        "Advanced customization",
      ],
      popular: true,
    },
    {
      title: "Premium",
      price: 750000,
      meals: 3,
      features: [
        "Full menu access",
        "Flexible delivery times",
        "Complete meal customization",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Choose Your Perfect Plan
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl bg-white p-8 shadow-xl ${plan.popular ? "border-4 border-emerald-500" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-emerald-500 px-4 py-1 text-sm font-bold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="mb-4 text-2xl font-bold">{plan.title}</h3>
              <p className="mb-4 text-4xl font-bold text-emerald-600">
                {plan.price.toLocaleString()}{" "}
                <span className="text-base font-normal text-zinc-500">
                  IQD/month
                </span>
              </p>
              <p className="mb-6 text-zinc-600">{plan.meals} meals per day</p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <Check className="mr-2 h-5 w-5 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-full py-3 font-semibold transition ${
                  plan.popular
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
