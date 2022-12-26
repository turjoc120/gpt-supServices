import React, { useEffect, useState } from "react";
import { Container, AdaptableCard } from "components/shared";
import { Button } from "components/ui";
import Editor from "./components/Editor";
import useQuery from "utils/hooks/useQuery";
import reducer from "./store";
import { injectReducer } from "store/index";
import { getArticle, setArticle } from "./store/dataSlice";
import { setCategory, setMode } from "./store/stateSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

injectReducer("knowledgeBaseEditArticle", reducer);

const EditArticle = () => {
  const [headingText, setHedingText] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id === "30") {
      setHedingText("Video Ideas");
    }
    if (id === "31") {
      setHedingText("Social Media Post Ideas");
    }
    if (id === "27") {
      setHedingText("Image Captions");
    }
    if (id === "28") {
      setHedingText("Personal Opinion");
    }
    if (id === "29") {
      setHedingText("Video Descriptions");
    }
    if (id === "32") {
      setHedingText("Video Titles");
    }
    if (id === "cover-letter") {
      setHedingText("Cover Letter");
    }
    if (id === "fictional-story") {
      setHedingText("Fictional Story Ideas");
    }
    if (id === "food-recipe") {
      setHedingText("Food Recipes");
    }
    if (id === "quora-answers") {
      setHedingText("Quora Answers");
    }
    if (id === "greetings") {
      setHedingText("Greetings");
    }
    if (id === "song-lyrics") {
      setHedingText("Song Lyrics");
    }
    if (id === "pd-reviews") {
      setHedingText("Product Reviews");
    }
    if (id === "linkedin-bio") {
      setHedingText("Personal Linkedin Bio");
    }
    if (id === "job-description") {
      setHedingText("Job Description");
    }
    if (id === "poems") {
      setHedingText("Poems");
    }

    if (id === "book-descriptions") {
      setHedingText("Book Descriptions");
    }
    if (id === "book-titles") {
      setHedingText("Book Titles");
    }
    if (id === "brand-name") {
      setHedingText("Brand Name Ideas");
    }
    if (id === "features-benefits") {
      setHedingText("Features to Benefits");
    }
    if (id === "product-descriptions") {
      setHedingText("Product Descriptions");
    }
    if (id === "marketing-ideas") {
      setHedingText("Marketing Ideas");
    }
    if (id === "product-names") {
      setHedingText("Product Names");
    }
    if (id === "reste-des") {
      setHedingText("Real Estate Listing Description");
    }
    if (id === "review-responder") {
      setHedingText("Review Responder");
    }
    if (id === "startup-pitch") {
      setHedingText("Startup Elevator Pitch");
    }
    if (id === "startup-ideas") {
      setHedingText("Startup Ideas");
    }
    if (id === "startup-slogans") {
      setHedingText("Startup Slogans");
    }
    if (id === "startup-value") {
      setHedingText("Startup Value Propositions");
    }
    if (id === "vision-mission") {
      setHedingText("Vision Mission");
    }
    if (id === "amazon-product-desc") {
      setHedingText("Amazon Product Description");
    }
    if (id === "blog-conclusions") {
      setHedingText("Blog Conclusions");
    }
    if (id === "blog-headlines") {
      setHedingText("Blog Headlines");
    }
    if (id === "blog-intros") {
      setHedingText("Blog Intros");
    }
    if (id === "blog-outlines") {
      setHedingText("Blog Outlines");
    }
    if (id === "blog-paragraphs") {
      setHedingText("Blog Paragraphs");
    }
    if (id === "blog-topics") {
      setHedingText("Blog Topics");
    }
    if (id === "cold-emails") {
      setHedingText("Cold Emails");
    }
    if (id === "explain-child") {
      setHedingText("Explain It To A Child");
    }
    if (id === "facebook-ads") {
      setHedingText("Facebook Ads");
    }
    if (id === "faqs") {
      setHedingText("FAQs");
    }
    if (id === "fab") {
      setHedingText("Features, Advantages, Benefits");
    }
    if (id === "generic-emails") {
      setHedingText("Generic Emails");
    }
    if (id === "google-ads") {
      setHedingText("Google Ads");
    }
    if (id === "hso-copywriting") {
      setHedingText("HSO Copywriting Formula");
    }
    if (id === "lead-magnets") {
      setHedingText("Lead Magnets");
    }
    if (id === "Listicles") {
      setHedingText("Lead Magnets");
    }
    if (id === "news-paragraphs") {
      setHedingText("News Paragraphs");
    }
    if (id === "offer-ideas") {
      setHedingText("Offer Ideas");
    }
    if (id === "press-release") {
      setHedingText("Press Release");
    }
  }, [id]);

  return (
    <Container>
      <AdaptableCard>
        <div className="max-w-[800px] mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h3>
              {" "}
              <span className="font-black text-2xl text-stone-900">
                {headingText}
              </span>
            </h3>
          </div>
          <Editor />
        </div>
      </AdaptableCard>
    </Container>
  );
};

export default EditArticle;
