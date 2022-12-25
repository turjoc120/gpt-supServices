import React, { useState, useEffect, useRef } from "react";
import { Input, Button, Spinner, Select } from "components/ui";
import { writeInOpenAI } from "./openAIMachine";
import { useParams } from "react-router-dom";
import ServiceInputForm from "./ServiceInputForm";
import { useDispatch, useSelector } from "react-redux";
import { setAiResultText } from "../store/stateSlice";

const Editor = ({ }) => {
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
  const handleVidIdeaSubmit = () => { };
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
