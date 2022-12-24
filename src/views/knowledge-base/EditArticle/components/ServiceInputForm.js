import React, { useState, useEffect, useRef } from 'react'
import { Input, Button, Spinner, Select } from 'components/ui'
import { writeInOpenAI } from './openAIMachine';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAiResultText } from '../store/stateSlice';


const ServiceInputForm = ({ data, id }) => {



    const [vidData, setVidData] = useState({});


    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);

    const channelOptions = [
        { value: 'youtube', label: 'youtube' },
        { value: 'facebook', label: 'facebook' },
        { value: 'instagram', label: 'instagram' },
        { value: 'tiktok', label: 'tiktok' }

    ]
    const genreOptions = [
        { value: 'fantasy', label: 'fantasy' },
        { value: 'horror', label: 'horror' },
        { value: 'romance', label: 'romance' },
        { value: 'seicence fiction', label: 'seicence fiction' }

    ]

    const onStatusFilterChange = (selected) => {
        setVidData({ ...vidData, channel: selected.value })
    }
    const dispatch = useDispatch();
    const handleVidIdeaSubmit = async (e) => {
        e.preventDefault();

        let finalVidStr;
        // video ideas
        if (id === "30") {
            finalVidStr = "tell me 5 viral video ideas of " + vidData.shortDes + " on " + vidData.channel + " in a list";
        }
        // social media posts
        if (id === "31") {
            finalVidStr = "write few social media posts about " + vidData.shortDes;
        }
        // image captions
        if (id === "27") {
            finalVidStr = "write few " + vidData.tone + " image captions for " + vidData.shortDes;
        }
        // personal opinion 
        if (id === "28") {
            finalVidStr = `write down your 5 ${vidData?.tone ? vidData?.tone : ""} opinion about ${vidData.shortDes}`;
        }
        // video description
        if (id === "29") {
            finalVidStr = `write down 5 ${vidData?.tone ? vidData?.tone : ""} video description about ${vidData.shortDes}`;
        }
        // video titles
        if (id === "32") {
            finalVidStr = `write down 5 video titles about ${vidData.shortDes}`;
        }
        // cover latter
        if (id === "cover-latters") {
            finalVidStr = `Write a cover letter to apply as a ${vidData.shortDes} i have ${vidData.skillExp} in ${vidData?.tone ? vidData?.tone : "positive"} tone `;

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
            finalVidStr = `Write the ${vidData?.tone ? vidData?.tone : ""} answer for this question ${vidData.shortDes} from quora`;

        }
        if (id === "song-lyrics") {
            finalVidStr = `Write a ${vidData?.tone ? vidData?.tone : ""} song lyrics for ${vidData.shortDes}`;

        }
        if (id === "job-description") {
            finalVidStr = `Write a ${vidData?.tone ? vidData?.tone : ""} job description for ${vidData.shortDes}`;

        }
        if (id === "poems") {
            finalVidStr = `Write a ${vidData?.tone ? vidData?.tone : ""} poems for ${vidData.shortDes}`;

        }
        if (id === "pd-reviews") {
            finalVidStr = `Write a ${vidData?.tone ? vidData?.tone : ""} product review about ${vidData.shortDes}`;

        }
        if (id === "linkedin-bio") {
            finalVidStr = `Write a ${vidData?.tone ? vidData?.tone : ""} linkedin bio for ${vidData.shortDes}`;

        }

        setIsLoading(true);
        if (finalVidStr) {
            const result = await writeInOpenAI({ prompt: finalVidStr });
            if (result.length) {
                dispatch(setAiResultText(result))
            }

        }
        setIsLoading(false);
    }


    return (
        <form onSubmit={handleVidIdeaSubmit} className='bg-neutral-100	rounded-md py-8 px-4 mb-2'>
            <div>
                <label className='font-bold text-base text-stone-600'>{data.field1}</label>
                <small className='text-gray-500 block mb-2'>{data.field1Short}</small>

                {id === "greetings" || id === "song-lyrics" || id === "job-description" || id === "linkedin-bio" ?
                    <textarea
                        onChange={(e) => setVidData({ ...vidData, shortDes: e.target.value })}
                        type="text"
                        name="shortDes"
                        rows={id === "linkedin-bio" ? 4 : 2}
                        placeholder={data.field1Place}
                        class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
                    /> : <input
                        onChange={(e) => setVidData({ ...vidData, shortDes: e.target.value })}
                        type="text"
                        name="shortDes"
                        placeholder={data.field1Place}
                        class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
                    />}
            </div>

            {id === "30" || id === "fictional-story" ? <div className='mt-8'>
                <label className='font-bold text-base text-stone-600'>{data.field2}</label>
                <small className='text-gray-500 block mb-2'>{data.field2Short}</small>

                <Select onChange={onStatusFilterChange} className="w-full block  outline-none " placeholder="Choose an option" options={id === "30" ? channelOptions : id === "fictional-story" ? genreOptions : ""}></Select>
            </div> : ""}

            {id === "cover-latters" && <div className='mt-8'>
                <label className='font-bold text-base text-stone-600'>{data.field3}</label>
                <small className='text-gray-500 block mb-2'>{data.field3Short}</small>

                <textarea
                    onChange={(e) => setVidData({ ...vidData, skillExp: e.target.value })}
                    type="text"
                    name="skillExp"
                    placeholder={data.field3Place}
                    class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
                />
            </div>}

            {id === "28" || id === "29" || id === "27" || id === "cover-latters" || id === "quora-answers" || id === "song-lyrics" || id === "job-description" || id === "poems" || id === "pd-reviews" || id === "linkedin-bio" ? <div className='mt-8'>
                <label className='font-bold text-base text-stone-600'>{data.field2}</label>
                <small className='text-gray-500 block mb-2'>{data.field2Short}</small>
                <input
                    onChange={(e) => setVidData({ ...vidData, tone: e.target.value })}
                    type="text"
                    name="tone"
                    placeholder={data.field2Place}
                    class="w-60 block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
                />
            </div> : ""}
            {isLoading ?
                <Button className=" mt-5 py-2 tracking-wide" size="sm" block variant="solid" >
                    <Spinner className="mx-auto block" color="white" />
                </Button>
                :
                <Button type="submit" className=" mt-5 py-2 tracking-wide" size="sm" block variant="solid" >WRITE FOR ME</Button>}

        </form>
    )
}


export default ServiceInputForm;