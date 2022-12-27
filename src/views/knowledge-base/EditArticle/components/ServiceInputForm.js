
// import components
import React, { useState, useEffect, useRef } from "react";
import { Input, Button, Spinner, Select } from "components/ui";
import { writeInOpenAI } from "./openAIMachine";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAiResultText } from "../store/stateSlice";

const ServiceInputForm = ({ data, id }) => {
  const [vidData, setVidData] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const channelOptions = [
    { value: "youtube", label: "youtube" },
    { value: "facebook", label: "facebook" },
    { value: "instagram", label: "instagram" },
    { value: "tiktok", label: "tiktok" },
  ];
  const genreOptions = [
    { value: "fantasy", label: "fantasy" },
    { value: "horror", label: "horror" },
    { value: "romance", label: "romance" },
    { value: "seicence fiction", label: "seicence fiction" },
  ];
  const bookTypeOptions = [
    { value: "fiction", label: "fiction" },
    { value: "non-fiction", label: "non-fiction" },
  ];
  const marketingIdeasOption = [
    { value: "conventional", label: "conventional" },
    { value: "viral", label: "viral" },
  ];
  const welcomeEmailOptions = [
    { value: "new_subscriber", label: "New Subscriber" },
    { value: "customer", label: "Customer" },
    { value: "trial_user", label: "Trial User" },
  ];
  const toneChangerOptions = [
    { value: "serious", label: "Serious" },
    { value: "humorous", label: "Humorous" },
    { value: "sad", label: "Sad" },
    { value: "tense", label: "Tense" },
    { value: "formal", label: "Formal" },
    { value: "informal", label: "Informal" },
    { value: "professional", label: "Professional" },
    { value: "optimistic", label: "Optimistic" },
    { value: "Cooperative", label: "Cooperative" },
  ];

  const onStatusFilterChange = (selected) => {
    setVidData({ ...vidData, channel: selected.value });
  };
  const dispatch = useDispatch();
  const handleVidIdeaSubmit = async (e) => {
    e.preventDefault();

    let finalVidStr;
    // video ideas
    if (id === "30") {
      finalVidStr =
        "tell me 5 viral video ideas of " +
        vidData.shortDes +
        " on " +
        vidData.channel +
        " in a list";
    }
    // social media posts
    if (id === "31") {
      finalVidStr = "write few social media posts about " + vidData.shortDes;
    }
    // image captions
    if (id === "27") {
      finalVidStr =
        "write few " + vidData.tone + " image captions for " + vidData.shortDes;
    }
    // personal opinion
    if (id === "28") {
      finalVidStr = `write down your 5 ${
        vidData?.tone ? vidData?.tone : ""
      } opinion about ${vidData.shortDes}`;
    }
    // video description
    if (id === "29") {
      finalVidStr = `write down 5 ${
        vidData?.tone ? vidData?.tone : ""
      } video description about ${vidData.shortDes}`;
    }
    // video titles
    if (id === "32") {
      finalVidStr = `write down 5 video titles about ${vidData.shortDes}`;
    }
    // cover letter
    if (id === "cover-letters") {
      finalVidStr = `Write a cover letter to apply as a ${
        vidData.shortDes
      } i have ${vidData.skillExp} in ${
        vidData?.tone ? vidData?.tone : "positive"
      } tone `;
    }
    // fictional-story
    if (id === "fictional-story") {
      finalVidStr = `Write a ${vidData.channel} fictional story for ${vidData.shortDes}`;
      console.log(finalVidStr);
    }
    // food-recipe
    if (id === "food-recipe") {
      finalVidStr = `Write a food recipe for ${vidData.shortDes}`;
    }
    if (id === "quora-answers") {
      finalVidStr = `Write the ${
        vidData?.tone ? vidData?.tone : ""
      } answer for this question ${vidData.shortDes} from quora`;
    }
    if (id === "song-lyrics") {
      finalVidStr = `Write a ${
        vidData?.tone ? vidData?.tone : ""
      } song lyrics for ${vidData.shortDes}`;
    }
    if (id === "job-description") {
      finalVidStr = `Write a ${
        vidData?.tone ? vidData?.tone : ""
      } job description for ${vidData.shortDes}`;
    }
    if (id === "poems") {
      finalVidStr = `Write a ${vidData?.tone ? vidData?.tone : ""} poems for ${
        vidData.shortDes
      }`;
    }
    if (id === "pd-reviews") {
      finalVidStr = `Write a ${
        vidData?.tone ? vidData?.tone : ""
      } product review about ${vidData.shortDes}`;
    }
    if (id === "linkedin-bio") {
      finalVidStr = `Write a ${
        vidData?.tone ? vidData?.tone : ""
      } linkedin bio for ${vidData.shortDes}`;
    }

    if (id === "book-descriptions") {
      finalVidStr = `Write a ${
        vidData?.tone ? vidData?.tone : ""
      } book Description for ${vidData.shortDes} with keywords like ${
        vidData.keywords
      }`;
    }

    if (id === "book-titles") {
      finalVidStr = `write suggestions of a ${vidData.channel} book title using this description ${vidData.shortDes}`;
    }

    if (id === "brand-name") {
      finalVidStr = `Suggest some brand names i can use for my product/business. A brief description of my business: ${vidData.shortDes} and some related keywords are ${vidData.tone}`;
    }

    if (id === "features-benefits") {
      finalVidStr = `Write me some benefits based on the following features: ${vidData.skillExp},  my product is all about the following ${vidData.shortDes}`;
    }

    if (id === "product-descriptions") {
      finalVidStr = `Write me a ${vidData.tone} toned description about my product. my product is all about the following ${vidData.shortDes}`;
    }
    if (id === "marketing-ideas") {
      finalVidStr = `write me some ${vidData.channel} marketing ideas about ${vidData.shortDes}`;
    }

    if (id === "product-names") {
      finalVidStr = `Write me some ${vidData.tone} product names about ${vidData.shortDes}`;
    }
    if (id === "reste-des") {
      finalVidStr = `Write me some ${vidData.tone} real estate listing description about ${vidData.shortDes}`;
    }
    if (id === "review-responder") {
      finalVidStr = `Write me some ${vidData.tone} content to respond a customer's review that is about ${vidData.shortDes}`;
    }
    if (id === "startup-pitch") {
      finalVidStr = `Write me a ${vidData.tone} startup elevator pitch about ${vidData.shortDes}`;
    }
    if (id === "startup-ideas") {
      finalVidStr = `Write some some startup ideas i can venture into. i have expertise in ${vidData.shortDes} and passion in ${vidData.skillExp}`;
    }

    if (id === "startup-slogans") {
      finalVidStr = `write me some startup slogans about ${vidData.shortDes} `;
    }

    if (id === "startup-value") {
      finalVidStr = `write a ${vidData.tone} startup Value Proposition about ${vidData.shortDes} `;
    }

    if (id === "vision-mission") {
      finalVidStr = `write a ${vidData.tone} vision mission statement about ${vidData.shortDes}`;
    }
    if (id === "amazon-product-desc") {
      finalVidStr = `write a ${vidData.tone} description for my amazon product. My product is about ${vidData.shortDes}`;
    }
    if (id === "blog-conclusions") {
      finalVidStr = `write a ${vidData.tone} conclusion for my blog article. My article is about ${vidData.shortDes}`;
    }
    if (id === "blog-headlines") {
      finalVidStr = `suggest some blog headlines about ${vidData.shortDes}`;
    }
    if (id === "blog-intros") {
      finalVidStr = `write me a ${vidData.tone} paragraph for my article which is about ${vidData.shortDes} , here are also some keywords to note ${vidData.keywords}`;
    }
    if (id === "blog-outlines") {
      finalVidStr = `write me some blog outlines for my article which is about ${vidData.shortDes}.`;
    }
    if (id === "blog-paragraphs") {
      finalVidStr = `write me a ${vidData.tone} blog paragraph for my article which is about ${vidData.shortDes}. Here are some keywords to consider ${vidData.keywords}`;
    }
    if (id === "cold-emails") {
      finalVidStr = `Write me a ${vidData.tone} cold email to ${vidData.shortDes} about ${vidData.obj}`;
    }
    if (id === "explain-child") {
      finalVidStr = `explain ${vidData.shortDes} like a child using a ${vidData.tone} tone`;
    }
    if (id === "facebook-ads") {
      finalVidStr = `write a copy for my facebook ad about ${vidData.shortDes} using a ${vidData.tone} tone`;
    }
    if (id === "faqs") {
      finalVidStr = `Generate labelled questions for my faq section about ${vidData.shortDes}`;
    }
    if (id === "fab") {
      finalVidStr = `Write me a features, advantages and benefits statement for my product/service about ${vidData.shortDes}`;
    }
    if (id === "generic-emails") {
      finalVidStr = `Write me a ${vidData.tone} generic email to ${vidData.shortDes} about ${vidData.obj}`;
    }
    if (id === "google-ads") {
      finalVidStr = `write a copy for my google ad about ${vidData.shortDes} using a ${vidData.tone} tone`;
    }
    if (id === "hso-copywriting") {
      finalVidStr = `suggest a hook, story and offer for my product about ${vidData.shortDes}`;
    }
    if (id === "lead-magnets") {
      finalVidStr = `suggest a lead magnet for my product/service which is about ${vidData.shortDes}`;
    }
    if (id === "listicles") {
      finalVidStr = `Generate items for a listicle which is about ${vidData.shortDes}`;
    }
    if (id === "news-paragraphs") {
      finalVidStr = `generate  a ${vidData.tone} news paragraphs  about ${vidData.shortDes}. some keyword to note are ${vidData.keywords}`;
    }
    if (id === "offer-ideas") {
      finalVidStr = `recommend some ideas for my next offer about ${vidData.shortDes}.`;
    }
    if (id === "press-release") {
      finalVidStr = `Write me a ${vidData.tone} press release statement about ${vidData.shortDes}.`;
    }
    if (id === "product-benefit") {
      finalVidStr = `Write me a ${vidData.tone} benefit header and paragraph about ${vidData.shortDes}. Some features or benefits to note include ${vidData.obj}`;
    }
    if (id === "product-story") {
      finalVidStr = `Write me a ${vidData.tone} story for my product which is about ${vidData.shortDes}. Some features or benefits to note include ${vidData.obj}`;
    }
    if (id === "quotable-quotes") {
      finalVidStr = `suggest some quotable quotes about ${vidData.shortDes}. `;
    }
    if (id === "sales-page-cta") {
      finalVidStr = `write me a ${vidData.tone} call to action for my sales page which is about ${vidData.shortDes}. `;
    }
    if (id === "sales-page-guarantee") {
      finalVidStr = `write me a ${vidData.tone} guarantee statement for my sales page which is about ${vidData.shortDes}. `;
    }
    if (id === "sales-page-headlines") {
      finalVidStr = `write me a ${vidData.tone} sales page headline or subheadings for my sales page which is about ${vidData.shortDes}. `;
    }
    if (id === "sales-page-opener") {
      finalVidStr = `write me a ${vidData.tone} opening paragraph for my sales page which is about ${vidData.shortDes}. `;
    }
    if (id === "seo-desc") {
      finalVidStr = `write me a short meta description (seo) for my sales page which is about ${vidData.shortDes}. some keywords to note are ${vidData.keywords}`;
    }
    if (id === "social-bio") {
      finalVidStr = `write me a ${vidData.tone} social media bio about ${vidData.shortDes}.`;
    }
    if (id === "website-about") {
      finalVidStr = `write me a ${vidData.tone} website about us content about ${vidData.shortDes}.`;
    }
    if (id === "welcome-emails") {
      finalVidStr = `write me a ${vidData.tone} welcome email for ${vidData.channel} about ${vidData.shortDes}.`;
    }
    if (id === "aida-copywriting") {
      finalVidStr = `write me an attention, interest, desire and action about ${vidData.shortDes}.`;
    }
    if (id === "analogy-provider") {
      finalVidStr = `write me a ${vidData.tone} analogy about ${vidData.shortDes}.`;
    }
    if (id === "bullet-point-expander") {
      finalVidStr = `construct some ${vidData.tone} sentences based on these bullet points ${vidData.shortDes}.`;
    }
    if (id === "content-rewriter") {
      finalVidStr = `rewrite my content differently about ${vidData.shortDes}.`;
    }
    if (id === "descriptive-expression") {
      finalVidStr = `write me a more expressive and ${vidData.tone} content about ${vidData.shortDes}.`;
    }
    if (id === "essay-paragraphs") {
      finalVidStr = `write me a ${vidData.tone} essay paragraph  about ${vidData.shortDes}. some keyword to note are ${vidData.keywords}`;
    }
    if (id === "example-provider") {
      finalVidStr = `write me a ${vidData.tone} example for ${vidData.shortDes}.`;
    }
    if (id === "fictional-story-narration") {
      finalVidStr = `write the ${
        vidData.tone ?? ""
      } part of a fictional story about ${
        vidData.shortDes
      }. You should also know about ${vidData.priorKnowlegde} `;
    }

    if (id === "grammar-corrector") {
      finalVidStr = `write me a correct sentence from the grammar:  ${vidData.shortDes}.`;
    }
    if (id === "mini-story") {
      finalVidStr = `write me a mini story about ${vidData.shortDes}.`;
    }
    if (id === "pas-copywriting") {
      finalVidStr = `write me a problem, agitate and solution about ${vidData.shortDes}.`;
    }
    if (id === "pros-cons") {
      finalVidStr = `write me pros and cons about ${vidData.shortDes}.`;
    }
    if (id === "sentence-expander") {
      finalVidStr = `write me an expanded sentence about ${vidData.shortDes}.`;
    }
    if (id === "tone-changer") {
      finalVidStr = `rewrite me this content about ${vidData.shortDes} using a ${vidData.skillExp} tone`;
    }
    if (id === "article-writing") {
      console.log(vidData);
      finalVidStr = `write me an article of ${vidData.tone} words about ${vidData.shortDes}. some descriptions to note are ${vidData.keywords}`;
    }

    setIsLoading(true);
    if (finalVidStr) {
      const result = await writeInOpenAI({ prompt: finalVidStr });
      if (result.length) {
        dispatch(setAiResultText(result));
      }
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleVidIdeaSubmit}
      className="bg-neutral-100	rounded-md py-8 px-4 mb-2"
    >
      <div>
        <label className="font-bold text-base text-stone-600">
          {data.field1}
        </label>
        <small className="text-gray-500 block mb-2">{data.field1Short}</small>

        {id === "greetings" ||
        id === "song-lyrics" ||
        id === "job-description" ||
        id === "linkedin-bio" ||
        id === "bullet-point-expander" ||
        id === "content-rewriter" ? (
          <textarea
            onChange={(e) =>
              setVidData({ ...vidData, shortDes: e.target.value })
            }
            type="text"
            name="shortDes"
            rows={id === "linkedin-bio" ? 4 : 2}
            placeholder={data.field1Place}
            class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        ) : (
          <input
            onChange={(e) =>
              setVidData({ ...vidData, shortDes: e.target.value })
            }
            type="text"
            name="shortDes"
            placeholder={data.field1Place}
            class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        )}
      </div>

      {id === "30" ||
      id === "fictional-story" ||
      id === "book-titles" ||
      id === "marketing-ideas" ||
      id === "welcome-emails" ||
      id === "tone-changer" ? (
        <div className="mt-8">
          <label className="font-bold text-base text-stone-600">
            {data.field2}
          </label>
          <small className="text-gray-500 block mb-2">{data.field2Short}</small>

          <Select
            onChange={onStatusFilterChange}
            className="w-full block  outline-none "
            placeholder="Choose an option"
            options={
              id === "30"
                ? channelOptions
                : id === "fictional-story"
                ? genreOptions
                : id === "book-titles"
                ? bookTypeOptions
                : id === "marketing-ideas"
                ? marketingIdeasOption
                : id === "welcome-emails"
                ? welcomeEmailOptions
                : id === "tone-changer"
                ? toneChangerOptions
                : ""
            }
          ></Select>
        </div>
      ) : (
        ""
      )}

      {id === "cover-letters" && (
        <div className="mt-8">
          <label className="font-bold text-base text-stone-600">
            {data.field3}
          </label>
          <small className="text-gray-500 block mb-2">{data.field3Short}</small>

          <textarea
            onChange={(e) =>
              setVidData({ ...vidData, skillExp: e.target.value })
            }
            type="text"
            name="skillExp"
            placeholder={data.field3Place}
            class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        </div>
      )}

      {id === "fictional-story-narration" && (
        <div className="mt-8">
          <label className="font-bold text-base text-stone-600">
            {data.field2}
          </label>
          <small className="text-gray-500 block mb-2">{data.field2Short}</small>

          <textarea
            onChange={(e) =>
              setVidData({ ...vidData, priorKnowlegde: e.target.value })
            }
            type="text"
            name="skillExp"
            placeholder={data.field2Place}
            class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        </div>
      )}

      {id === "book-descriptions" ||
      id === "blog-paragraphs" ||
      id === "blog-intros" ||
      id === "news-paragraphs" ||
      id === "seo-desc" ||
      id === "essay-paragraphs" ||
      id === "article-writing" ? (
        <div className="mt-8">
          <label className="font-bold text-base text-stone-600">
            {data.field3}
          </label>
          <small className="text-gray-500 block mb-2">{data.field3Short}</small>

          <textarea
            onChange={(e) =>
              setVidData({ ...vidData, keywords: e.target.value })
            }
            type="text"
            name="keywords"
            placeholder={data.field3Place}
            class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        </div>
      ) : (
        ""
      )}

      {id === "cold-emails" ||
      id === "generic-emails" ||
      id === "product-benefit" ? (
        <div className="mt-8">
          <label className="font-bold text-base text-stone-600">
            {data.field3}
          </label>
          <small className="text-gray-500 block mb-2">{data.field3Short}</small>

          <textarea
            onChange={(e) => setVidData({ ...vidData, obj: e.target.value })}
            type="text"
            name="objective"
            placeholder={data.field3Place}
            class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        </div>
      ) : (
        ""
      )}

      {id === "welcome-emails" || id === "fictional-story-narration" ? (
        <div className="mt-8">
          <label className="font-bold text-base text-stone-600">
            {data.field3}
          </label>
          <small className="text-gray-500 block mb-2">{data.field3Short}</small>

          <textarea
            onChange={(e) => setVidData({ ...vidData, tone: e.target.value })}
            type="text"
            name="objective"
            placeholder={data.field3Place}
            class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        </div>
      ) : (
        ""
      )}

      {id === "features-benefits" && (
        <div className="mt-8">
          <label className="font-bold text-base text-stone-600">
            {data.field2}
          </label>
          <small className="text-gray-500 block mb-2">{data.field2Short}</small>

          <textarea
            onChange={(e) =>
              setVidData({ ...vidData, skillExp: e.target.value })
            }
            type="text"
            name="skillExp"
            placeholder={data.field2Place}
            class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        </div>
      )}
      {id === "startup-ideas" && (
        <div className="mt-8">
          <label className="font-bold text-base text-stone-600">
            {data.field2}
          </label>
          <small className="text-gray-500 block mb-2">{data.field2Short}</small>

          <textarea
            onChange={(e) =>
              setVidData({ ...vidData, skillExp: e.target.value })
            }
            type="text"
            name="skillExp"
            placeholder={data.field2Place}
            class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        </div>
      )}

      {id === "28" ||
      id === "29" ||
      id === "27" ||
      id === "cover-letters" ||
      id === "quora-answers" ||
      id === "song-lyrics" ||
      id === "job-description" ||
      id === "poems" ||
      id === "pd-reviews" ||
      id === "linkedin-bio" ||
      id === "book-descriptions" ||
      id === "brand-name" ||
      id === "product-descriptions" ||
      id === "product-names" ||
      id === "reste-des" ||
      id === "review-responder" ||
      id === "startup-pitch" ||
      id === "startup-value" ||
      id === "vision-mission" ||
      id === "amazon-product-desc" ||
      id === "blog-conclusions" ||
      id === "blog-intros" ||
      id === "blog-paragraphs" ||
      id === "cold-emails" ||
      id === "explain-child" ||
      id === "facebook-ads" ||
      id === "generic-emails" ||
      id === "news-paragraphs" ||
      id === "press-release" ||
      id === "product-benefit" ||
      id === "product-story" ||
      id === "sales-page-cta" ||
      id === "sales-page-guarantee" ||
      id === "sales-page-headlines" ||
      id === "sales-page-opener" ||
      id === "social-bio" ||
      id === "website-about" ||
      id === "analogy-provider" ||
      id === "bullet-point-expander" ||
      id === "descriptive-expression" ||
      id === "essay-paragraphs" ||
      id === "example-provider" ||
      id === "article-writing" ? (
        <div className="mt-8">
          <label className="font-bold text-base text-stone-600">
            {data.field2}
          </label>
          <small className="text-gray-500 block mb-2">{data.field2Short}</small>
          <input
            onChange={(e) => setVidData({ ...vidData, tone: e.target.value })}
            type="text"
            name="tone"
            placeholder={data.field2Place}
            class="w-60 block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
          />
        </div>
      ) : (
        ""
      )}
      {isLoading ? (
        <Button
          className=" mt-5 py-2 tracking-wide"
          size="sm"
          block
          variant="solid"
        >
          <Spinner className="mx-auto block" color="white" />
        </Button>
      ) : (
        <Button
          type="submit"
          className=" mt-5 py-2 tracking-wide"
          size="sm"
          block
          variant="solid"
        >
          WRITE FOR ME
        </Button>
      )}
    </form>
  );
};

export default ServiceInputForm;
