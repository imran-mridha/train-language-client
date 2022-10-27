import React from 'react';

const Faq = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
        <h2 className="mb-12 text-3xl font-semibold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold text-2xl">Why should I learn a second language?</h3>
            <p className="mt-1 text-gray-600">If learning a language doesn’t interest you, this may not be the blog for you! But hear us out… There are many different great reasons to learn a new language! Not everyone who begins learning a language does it to eventually achieve bilingual status. Having basic conversational abilities in a language can open lots of doors to opportunities you may never have thought of. Here’s a list of some of the most common motivating factors for learning languages:</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">How hard is it to learn a new language?</h3>
            <p className="mt-1 text-gray-600">Generally, it’s not learning a new language per se that’s difficult or easy. Nor does it have to do with the target language itself (although some are admittedly more complex than others). Instead, it has more to do with how you learn, whether the approach you’ve chosen is effective and seems simple or, alternatively, insurmountable. Before even starting, we recommend thinking about all the different tools and resources that you might use to learn a language.</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">What language should I learn?</h3>
            <p className="mt-1 text-gray-600">most people are better off sticking to one language at a time. (My dad used to tell me that if you try to do a little bit of everything, you’ll never get really good at anything, and I think that’s true in this situation, too.) Language learning is a very personal journey, and only you can decide which language is best for you. However, there are different reasons for learning different languages, none more valid than others. Might we suggest starting with one of the most useful languages? Our list includes 7 languages that we think serve people the most, whether it be because they are very widely spoken or practical from a professional or economic point of view.</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">How long does it take to learn a language?</h3>
            <p className="mt-1 text-gray-600">There are a few methods that can help you learn more quickly, but in general, immersion is the most effective. To more fully experience a language without moving to a new country, you’ll need to create an “immersion bubble,” where you constantly speak the language, hear the language, read it, watch it, live it, etc. For our brains to remember things in the long term, it’s important to repeat them frequently and regularly. Watching movies or TV shows, chatting with a native speaker, and learning new vocabulary are all excellent ways to create an immersion bubble, but consistency is key.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;