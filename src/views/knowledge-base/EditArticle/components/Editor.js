import React, { useState, useEffect, useRef } from "react";
import { Input, Button, Spinner, Select } from "components/ui";
import { writeInOpenAI } from "./openAIMachine";
import { useParams } from "react-router-dom";
import ServiceInputForm from "./ServiceInputForm";
import { useDispatch, useSelector } from "react-redux";
import { setAiResultText } from "../store/stateSlice";

const Editor = ({}) => {
  // const [text, setText] = useState("");
  // const [vidData, setVidData] = useState({});

  const aiResultText = useSelector(
    (state) => state.knowledgeBaseEditArticle.state.aiResultText
  );
  const dispatch = useDispatch();

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(setAiResultText(""));
  }, [id]);
  console.log("llllll " + id);
  const handleVidIdeaSubmit = () => {};
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-4 md:grid-cols-1 sm:grid-cols-1 ">
      <div className="sm:mb-4">
        {
          // get video ideas
          id === "30" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTIONS",
                field1Short: "recommend viral ideas for your video",
                field1Place: "e.g home workouts",
                field2: "CHANNEL",
                field2Short: "Facebook,Tiktok or youtube",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }

        {
          // social media posts
          id === "31" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTIONS",
                field1Short: "what your social media page is about",
                field1Place: "e.g home workouts",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }

        {
          // captions for your image
          id === "27" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTIONS",
                field1Short: "What your image is about.",
                field1Place: "e.g me in front of burj khalifa",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }

        {
          // Personal Opinion
          id === "28" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTIONS",
                field1Short: "what you want my opinion on",
                field1Place: "e.g climate change",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }

        {
          // video descriptions
          id === "29" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTIONS",
                field1Short: "what your video is about",
                field1Place: "e.g how to start weight lifting",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }

        {
          // video titles
          id === "32" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTIONS",
                field1Short: "what your video is about",
                field1Place: "e.g how to start weight lifting",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // cover-letter
          id === "cover-letters" && (
            <ServiceInputForm
              data={{
                field1: "ROLE",
                field1Short: "the role your are applying for",
                field1Place: "e.g sales manager",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
                field3: "SKILLS AND EXPERIENCE",
                field3Short: "your skills and experience related to this role",
                field3Place:
                  "e.g sales manager in multiple companies for 10 years",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {id === "fictional-story" && (
          <ServiceInputForm
            data={{
              field1: "MAIN CHARACTER/S",
              field1Short: "main characters and their characteristics",
              field1Place: "e.g a boy finds a new type of coffe",
              field2: "GENRE",
              field2Short: "fantasy,horror,romance or science fiction.",
            }}
            key={id}
            id={id}
          ></ServiceInputForm>
        )}
        {
          // food-recipe
          id === "food-recipe" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "what your dish is about?",
                field1Place: "e.g chicken tikka masala",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // quora-answers
          id === "quora-answers" && (
            <ServiceInputForm
              data={{
                field1: "QUESTION",
                field1Short: "the question you want an answer to",
                field1Place: "e.g why the sea is blue",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {id === "poems" && (
          <ServiceInputForm
            data={{
              field1: "SHORT DESCRIPTION",
              field1Short: "what your poem is about",
              field1Place: "e.g travlling to jungle and enjoying the bauty",
              field2: "TONE",
              field2Short:
                "Tone of voice your want the AI to write in. optional",
              field2Place: "e.g excited",
            }}
            key={id}
            id={id}
          ></ServiceInputForm>
        )}
        {id === "linkedin-bio" && (
          <ServiceInputForm
            data={{
              field1: "BULLET POINTS",
              field1Short: "your most important skills point form",
              field1Place: `e.g digital marketing freelancer for 3 years
																			-facebook marketing expert -founder of profit food for kids`,
              field2: "TONE",
              field2Short:
                "Tone of voice your want the AI to write in. optional",
              field2Place: "e.g excited",
            }}
            key={id}
            id={id}
          ></ServiceInputForm>
        )}
        {id === "pd-reviews" && (
          <ServiceInputForm
            data={{
              field1: "SHORT DESCRIPTION",
              field1Short:
                "product name and description include any important points",
              field1Place: "e.g AI writing tool, easy to use interface",
              field2: "TONE",
              field2Short:
                "Tone of voice your want the AI to write in. optional",
              field2Place: "e.g excited",
            }}
            key={id}
            id={id}
          ></ServiceInputForm>
        )}
        {
          // greetings
          id === "greetings" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "what is the event. include short phrases you want to include",
                field1Place:
                  "e.g congrats on your new baby. she is so cute, hope to see you all soon",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // song-lyrics
          id === "song-lyrics" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "what your song is about.",
                field1Place:
                  "e.g forbidden love between two peoples whose parents hate each others",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // job-description
          id === "job-description" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION OF ROLE",
                field1Short:
                  "breifly describe the role. include important requirements( in short scentance)",
                field1Place:
                  "e.g marketing director for pharmaceutical company 10 years of experience is required",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {/* Business Services */}
        {
          // book-descriptions
          id === "book-descriptions" && (
            <ServiceInputForm
              data={{
                field1: "BOOK TITLE",
                field1Short: "Title of your book",
                field1Place: "e.g The Coffee Roaster's Guidebook",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
                field3: "KEYWORDS",
                field3Short:
                  "Keywords to be included, separated by commas, Optional.",
                field3Place: "e.g Keyword1, Keyword2",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // book-titles
          id === "book-titles" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your book is about",
                field1Place: "e.g How to roast your own coffee beans",
                field2: "BOOK TYPE",
                field2Short: "Fiction or nonfiction",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // brand-names
          id === "brand-name" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "Describe your business, product, or service",
                field1Place: "e.g speciality coffee beans",
                field2: "KEYWORDS",
                field2Short:
                  "Keywords to be included, separated by commas, Optional.",
                field2Place: "e.g Keyword1, Keyword2",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // features-benefits
          id === "features-benefits" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What is your product about.",
                field1Place: "e.g coffee bean roaster for home",
                field2: "FEATURES",
                field2Short: "State features and number them.",
                field2Place: `e.g 1. Roaster beans under a minute
2. Easy to Operate
3. Easy to clean`,
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // marketing-ideas
          id === "marketing-ideas" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your product or business is about",
                field1Place: "e.g coffee grinding machine",
                field2: "TYPE",
                field2Short: "Conventional or viral",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // product-descriptions
          id === "product-descriptions" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your product or business is about",
                field1Place:
                  "e.g onlyAI, AI content writing tool. Easy to use interface",
                field2: "TONE",
                field2Short: "Tone of voice you want the AI to write. Optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // product-descriptions
          id === "product-names" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your product is about",
                field1Place: "e.g home coffee bean roaster",
                field2: "TONE",
                field2Short: "How the name should sound",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // reste-des
          id === "reste-des" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "Briefly describe the property. In short sentences.",
                field1Place:
                  "e.g 2BR Apartment in downtown Manhattan. 1000 sqft. Askin $2M nego. Amazing city views",
                field2: "TONE",
                field2Short: "How the name should sound",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // review-responder
          id === "review-responder" && (
            <ServiceInputForm
              data={{
                field1: "CUSTOMER REVIEW",
                field1Short: "What the customer wrote",
                field1Place:
                  "e.g I've been using OnlyAI for a while now and I'm really happy with it. It's helped me free up a lot of time that I would have otherwise spent on writing content.",
                field2: "TONE",
                field2Short:
                  "Tone of voice you want the AI to write in. Optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // startup-pitch
          id === "startup-pitch" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "What your startup is about. Use bullet points or short sentences",
                field1Place: `e.g - AI content writing tool`,
                field2: "TONE",
                field2Short:
                  "Tone of voice you want the AI to write in. Optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // startup-ideas
          id === "startup-ideas" && (
            <ServiceInputForm
              data={{
                field1: "YOUR EXPERTISE",
                field1Short: "What you're really good at",
                field1Place: `e.g teaching`,
                field2: "YOUR PASSION",
                field2Short: "What you're really passionate about",
                field2Place: "e.g coffee",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // startup-slogans
          id === "startup-slogans" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your product is about.",
                field1Place: `e.g reusable water bottle`,
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // startup-value
          id === "startup-value" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your product is about",
                field1Place: `e.g gaming chair`,
                field2: "TONE",
                field2Short:
                  "Tone of voice you want the AI to write in. Optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // Vision-Mission
          id === "vision-mission" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "breifly describe the role. include important requirements( in short scentance)",
                field1Place:
                  "e.g marketing director for pharmaceutical company 10 years of experience is required",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {/* Marketing tools */}
        {
          // amazon-product-desc
          id === "amazon-product-desc" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "What is the product about. Include any required points.",
                field1Place:
                  "e.g Triple-strength omega 3 fish oil supplements with EPA and DHA",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // /blog-conclusions
          id === "blog-conclusions" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "What is the article about. Include any required points.",
                field1Place:
                  "e.g How to meditate.  Meditation has many benefits and is easy to pickup",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // blog-headlines
          id === "blog-headlines" && (
            <ServiceInputForm
              data={{
                field1: "TOPIC",
                field1Short: "What is the article about.",
                field1Place:
                  "e.g gaining instagram followers quickly for beginners",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // blog-intros
          id === "blog-intros" && (
            <ServiceInputForm
              data={{
                field1: "TOPIC",
                field1Short: "What is the article or section about.",
                field1Place:
                  "e.g simple but effective ways of improving mental health when working from home",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
                field3: "KEYWORDS",
                field3Short:
                  "Keywords to be included, separated by commas, Optional.",
                field3Place: "e.g Keyword1, Keyword2",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // blog-outlines
          id === "blog-outlines" && (
            <ServiceInputForm
              data={{
                field1: "TOPIC",
                field1Short: "What is the article about.",
                field1Place:
                  "e.g how to exercise at home using common household items",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // blog-paragraphs
          id === "blog-paragraphs" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What is the blog section about.",
                field1Place: "e.g What is Meditation?",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
                field3: "KEYWORDS",
                field3Short:
                  "Keywords to be included, separated by commas, Optional.",
                field3Place: "e.g Keyword1, Keyword2",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // blog-topics
          id === "blog-topics" && (
            <ServiceInputForm
              data={{
                field1: "BLOG DESCRIPTION",
                field1Short: "What is your blog about.",
                field1Place:
                  "e.g Making passive income via affiliate marketing and SEO",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // cold-emails
          id === "cold-emails" && (
            <ServiceInputForm
              data={{
                field1: "TARGET RECIPIENT",
                field1Short: "Who you are sending the email to.",
                field1Place: "e.g coffee loving subscriber",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
                field3: "OBJECTIVE",
                field3Short: "The purpose of sending the email.",
                field3Place: "e.g introduce my new coffee subscription service",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // explain-child
          id === "explain-child" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What is the topic about.",
                field1Place: "e.g What is life?",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // facebook-ads
          id === "facebook-ads" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "Name of product or service, and what it is about.",
                field1Place: "e.g The Roaster, home coffee roasting machine",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // faqs
          id === "faqs" && (
            <ServiceInputForm
              data={{
                field1: "WEBSITE DESCRIPTION",
                field1Short: "What your website is about.",
                field1Place: "e.g Helps people write content faster using AI",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // fab
          id === "fab" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "Name of your product/service and what it does.",
                field1Place: "e.g OnlyAI, AI content writing tool.",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // generic-emails
          id === "generic-emails" && (
            <ServiceInputForm
              data={{
                field1: "RECIPIENT",
                field1Short: "Who you are sending the email to.",
                field1Place: "e.g business owner",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
                field3: "SHORT DESCRIPTION",
                field3Short: "What the email is about.",
                field3Place:
                  "e.g Why SEO is important for small businesses. Reply to this email to get a free SEO consultation.",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // google-ads
          id === "google-ads" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "Name of product or service, and what it is about.",
                field1Place: "e.g The Roaster, home coffee roasting machine",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // hso-copywriting
          id === "hso-copywriting" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What the product is about.",
                field1Place:
                  "e.g BuzzOff, an electronic repellant for flies and mosquitoes",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // lead-magnets
          id === "lead-magnets" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your product/service is about.",
                field1Place: "e.g Coffee subscription service",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // listicles
          id === "listicles" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What the topic is about.",
                field1Place: "e.g How to write better",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // news-paragraphs
          id === "news-paragraphs" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "What this article section is about. Include additional points in short sentences",
                field1Place:
                  "e.g Global stocks are down today. Due to fed rate hike.",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
                field3: "KEYWORDS",
                field3Short:
                  "Keywords to be included, separated by commas, Optional.",
                field3Place: "e.g Keyword1, Keyword2",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // offer-ideas
          id === "offer-ideas" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your business is about.",
                field1Place: "e.g Coffee subscription service",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // press-release
          id === "press-release" && (
            <ServiceInputForm
              data={{
                field1: "PURPOSE",
                field1Short: "The purpose of the press release.",
                field1Place:
                  "e.g annouce kook coffee's new coffee flavor - Zesty Tangerine",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // product-benefit
          id === "product-benefit" && (
            <ServiceInputForm
              data={{
                field1: "PRODUCT DESCRIPTION",
                field1Short:
                  "Name and short description of the product you're selling",
                field1Place: "e.g QuickFunnels, a funnel building sftware",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
                field3: "FEATURE OR BENEFIT",
                field3Short: "Write ONE feature or benefit of the product",
                field3Place: "e.g saves time",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // product-story
          id === "product-story" && (
            <ServiceInputForm
              data={{
                field1: "PRODUCT DESCRIPTION",
                field1Short:
                  "Name and description of the product or service. Include pertinent features",
                field1Place:
                  "e.g QuickFunnels, a funnel building sftware. Lightweight and fast",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // quotable-quotes
          id === "quotable-quotes" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What the topic is about.",
                field1Place: "e.g motivation",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // sales-page-cta
          id === "sales-page-cta" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "The Name and description of the product or service, and what it is about.",
                field1Place: "e.g OnlyAI, AI writing tool",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // sales-page-guarantee
          id === "sales-page-guarantee" && (
            <ServiceInputForm
              data={{
                field1: "PRODUCT DESCRIPTION",
                field1Short:
                  "Name and description of the product you are selling include specific guarantees, if any.",
                field1Place:
                  "e.g QuickFunnels, a funnel building software. 60 day money-back",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // sales-page-headlines
          id === "sales-page-headlines" && (
            <ServiceInputForm
              data={{
                field1: "PRODUCT DESCRIPTION",
                field1Short:
                  "Name and description of the product you are selling.",
                field1Place: "e.g QuickFunnels, a funnel building software. ",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // sales-page-opener
          id === "sales-page-opener" && (
            <ServiceInputForm
              data={{
                field1: "PRODUCT DESCRIPTION",
                field1Short:
                  "Name and short description of the product you are selling. Include any attributes to mention.",
                field1Place:
                  "e.g QuickFunnels, a funnel building software. Fast and easy ",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // seo-desc
          id === "seo-desc" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your page is about.",
                field1Place: "e.g Introduction to affiliate marketing",
                field3: "KEYWORDS",
                field3Short:
                  "Keywords to be included, separated by commas, Optional.",
                field3Place: "e.g Keyword1, Keyword2",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // social-bio
          id === "social-bio" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short: "What your business is about.",
                field1Place: "e.g HealthX, health supplements.",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // website-about
          id === "website-about" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "What your website is about. Use bullet points or short sentences.",
                field1Place: "e.g - WordHero - AI Content Writing tool",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // website-about
          id === "website-about" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "What your website is about. Use bullet points or short sentences.",
                field1Place: "e.g - WordHero - AI Content Writing tool",
                field2: "TONE",
                field2Short:
                  "Tone of voice your want the AI to write in. optional",
                field2Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {
          // welcome-emails
          id === "welcome-emails" && (
            <ServiceInputForm
              data={{
                field1: "SHORT DESCRIPTION",
                field1Short:
                  "Name of product or service, and what it is about.",
                field1Place:
                  "e.g Addicted coffee, monthly coffee subscription service with doorstep delivery.",
                field2: "TARGET RECIPIENT",
                field2Short: "New subscriber, customer, or trial user.",
                field3: "TONE",
                field3Short:
                  "Tone of voice your want the AI to write in. optional",
                field3Place: "e.g excited",
              }}
              key={id}
              id={id}
            ></ServiceInputForm>
          )
        }
        {/* // // other 
					// <div>
					// 	<div className="mb-4">
					// 		<Input rows="12" ref={inputRef} placeholder="write...." textArea />
					// 	</div>
					// 	{isLoading ? <Spinner /> : <Button className="block" variant="solid" >Submit</Button>}
					// </div> */}
      </div>
      <div className="h-80 overflow-y-auto border-2 p-2 border-gray-200 rounded-md">
        {aiResultText &&
          aiResultText?.split("\n")?.map((el, i) => (
            <p key={i} className=" text-stone-600 leading-relaxed px-2 pb-2">
              {el}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Editor;
