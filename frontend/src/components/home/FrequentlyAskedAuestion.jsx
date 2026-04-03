import React from 'react'

const FrequentlyAskedAuestion = () => {
  return (
    <div>
        <div class="space-y-2 max-w-4xl mx-auto p-4">
    <h2 class="text-3xl font-extrabold text-slate-900 mb-8">Frequently Asked Questions</h2>

    <div class="accordion rounded-lg hover:bg-blue-50 transition-all">
        <button type="button"
            class="toggle-button cursor-pointer w-full text-base font-medium text-left py-5 px-6 text-slate-900 flex items-center">
            <span class="mr-4">Are there any special discounts or promotions available during the event?</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                class="arrow transition-all w-3 fill-current ml-auto shrink-0 -rotate-90" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="content px-6 invisible max-h-0 overflow-hidden transition-all duration-300">
            <p class="text-[15px] text-slate-600 leading-relaxed">
                Yes, we offer early bird pricing and bundle discounts on selected products. Subscribe to our newsletter
                to stay updated on all active deals.
            </p>
        </div>
    </div>

    <div class="accordion rounded-lg bg-blue-50 transition-all">
        <button type="button"
            class="toggle-button cursor-pointer w-full text-base font-semibold text-left py-5 px-6 text-slate-900 flex items-center">
            <span class="mr-4">What are the dates and locations for the product launch events?</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                class="arrow transition-all w-3 fill-current ml-auto shrink-0 -rotate-180" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="content pb-5 px-6 overflow-hidden transition-all duration-300">
            <p class="text-[15px] text-slate-600 leading-relaxed">
                The main product launch event will be held on August 24th in Bengaluru, India. Other regional events are
                planned throughout Q4 — check the Events page for a full schedule.
            </p>
        </div>
    </div>

    <div class="accordion rounded-lg hover:bg-blue-50 transition-all">
        <button type="button"
            class="toggle-button cursor-pointer w-full text-base font-medium text-left py-5 px-6 text-slate-900 flex items-center">
            <span class="mr-4">Can I bring a guest with me to the product launch event?</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                class="arrow transition-all w-3 fill-current ml-auto shrink-0 -rotate-90" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="content px-6 invisible max-h-0 overflow-hidden transition-all duration-300">
            <p class="text-[15px] text-slate-600 leading-relaxed">
                Yes, guests are welcome, but they must register individually through the event signup page. Each guest
                will receive a separate entry pass.
            </p>
        </div>
    </div>

    <div class="accordion rounded-lg hover:bg-blue-50 transition-all">
        <button type="button"
            class="toggle-button cursor-pointer w-full text-base font-medium text-left py-5 px-6 text-slate-900 flex items-center">
            <span class="mr-4">How can I contact the event organizers?</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                class="arrow transition-all w-3 fill-current ml-auto shrink-0 -rotate-90" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="content px-6 invisible max-h-0 overflow-hidden transition-all duration-300">
            <p class="text-[15px] text-slate-600 leading-relaxed">
                You can reach our team via the contact form on our website or email us at support@readymadeui.com. We're
                available Monday–Friday, 9 AM to 6 PM IST.
            </p>
        </div>
    </div>

    <div class="accordion rounded-lg hover:bg-blue-50 transition-all">
        <button type="button"
            class="toggle-button cursor-pointer w-full text-base font-medium text-left py-5 px-6 text-slate-900 flex items-center">
            <span class="mr-4">Is there parking available at the venue?</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                class="arrow transition-all w-3 fill-current ml-auto shrink-0 -rotate-90" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="content px-6 invisible max-h-0 overflow-hidden transition-all duration-300">
            <p class="text-[15px] text-slate-600 leading-relaxed">
                Yes, on-site parking is available for attendees. We recommend arriving early to secure a spot as spaces
                are limited and allocated on a first-come basis.
            </p>
        </div>
    </div>

    <div class="accordion rounded-lg hover:bg-blue-50 transition-all">
        <button type="button"
            class="toggle-button cursor-pointer w-full text-base font-medium text-left py-5 px-6 text-slate-900 flex items-center">
            <span class="mr-4">Will the sessions be recorded or available online after the event?</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                class="arrow transition-all w-3 fill-current ml-auto shrink-0 -rotate-90" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="content px-6 invisible max-h-0 overflow-hidden transition-all duration-300">
            <p class="text-[15px] text-slate-600 leading-relaxed">
                Yes, all main sessions will be recorded and made available to registered users via the dashboard within
                a week after the event.
            </p>
        </div>
    </div>

    <div class="accordion rounded-lg hover:bg-blue-50 transition-all">
        <button type="button"
            class="toggle-button cursor-pointer w-full text-base font-medium text-left py-5 px-6 text-slate-900 flex items-center">
            <span class="mr-4">Do I need to bring a printed ticket to enter?</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                class="arrow transition-all w-3 fill-current ml-auto shrink-0 -rotate-90" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="content px-6 invisible max-h-0 overflow-hidden transition-all duration-300">
            <p class="text-[15px] text-slate-600 leading-relaxed">
                No need to bring a printed ticket. A digital confirmation email or QR code is sufficient for check-in at
                the venue.
            </p>
        </div>
    </div>

    <div class="accordion rounded-lg hover:bg-blue-50 transition-all">
        <button type="button"
            class="toggle-button cursor-pointer w-full text-base font-medium text-left py-5 px-6 text-slate-900 flex items-center">
            <span class="mr-4">Are meals or refreshments provided at the event?</span>
            <svg xmlns="http://www.w3.org/2000/svg"
                class="arrow transition-all w-3 fill-current ml-auto shrink-0 -rotate-90" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="content px-6 invisible max-h-0 overflow-hidden transition-all duration-300">
            <p class="text-[15px] text-slate-600 leading-relaxed">
                Yes, lunch and light refreshments will be provided during breaks. Vegetarian and vegan options will also
                be available.
            </p>
        </div>
    </div>
</div>
    </div>
  )
}

export default FrequentlyAskedAuestion