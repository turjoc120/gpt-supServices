
import React from 'react'
import { Card, Avatar, Button } from 'components/ui'
import { IconText } from 'components/shared'
import { FcApproval } from 'react-icons/fc'

const PlansCard = ({ plan }) => {

    // const cardFooter = (
    //     <div className="flex items-center">
    //         <Avatar size={30} className="mr-2" shape="circle" src="/img/avatars/thumb-1.jpg" />
    //         <span>
    //             <h6 className="text-sm">Kristen Fisher</h6>
    //             <span className="text-xs">Sep 23, 2021</span>
    //         </span>
    //     </div>
    // )

    // const cardHeader = (
    //     <div className="rounded-tl-lg rounded-tr-lg overflow-hidden">
    //         <img src="/img/others/img-1.jpg" alt="image" />
    //     </div>
    // )

    return (
        <div className="max-w-xs text-center">
            <Card
                // clickable
                className="hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid"
                headerClass="p-0"
                footerBorder={false}
                headerBorder={false}
            >
                <h1 className='my-5'><IconText
                    className="text-emerald-500 	"
                    icon={<FcApproval className="mx-auto block" />}
                ></IconText></h1>
                <div className='my-1'>
                    <h3 className='text-2xl font-bold mx-auto block'>${plan.unit_amount / 100} </h3> <small>per month!</small>
                </div>


                <span className="text-emerald-600 font-semibold">{plan.id === "price_1MJg02E7WZj5EJtA1sjdjffX" ? "Premium" : "Basic"}</span>
                <h4 className="font-bold my-3">This Service Includes</h4>
                <ul>
                    <li>lorem ipsum,lorem ipsum</li>
                    <li>lorem ipsum,lorem ipsum</li>
                    <li>lorem ipsum,lorem ipsum</li>
                    <li>lorem ipsum,lorem ipsum</li>
                    <li>lorem ipsum,lorem ipsum</li>
                    <li>lorem ipsum,lorem ipsum</li>

                </ul>
                <Button className="mt-5 w-full block" variant="solid"><span>Get Started</span>
                </Button>
            </Card>
        </div>
    )
}

export default PlansCard

