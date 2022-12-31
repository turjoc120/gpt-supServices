
import React, { useState } from 'react'
import { Card, Avatar, Button } from 'components/ui'
import { IconText } from 'components/shared'
import { FcApproval } from 'react-icons/fc'
import { apiPlanSubscription } from 'services/PlansServies'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from 'store/auth/userSlice'

const PlansCard = ({ plan }) => {

    const token = useSelector((state) => state?.auth?.session?.token)
    const userEmail = useSelector((state) => state?.auth?.user?.email)
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handlePlan = (priceId) => {
        setLoading(true)
        apiPlanSubscription(
            {
                email: userEmail,
                priceId
            },
            { authorization: `Bearer ${token}` }
        ).then(res => {
            if (res) {
                setLoading(false);
                // test remove
                dispatch(setUser(res.data.updatedUser))
                console.log(res.data);
                // test remove
                window.location.href = res.data.session.url;

            }

        })
    }

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


                <span className="text-emerald-600 font-semibold">{plan.id === "price_1MJg02E7WZj5EJtA1sjdjffX" ? "Premium" : plan.id === "price_1ML91EE7WZj5EJtARMjZNhu3" ? "Standard" : "Basic"}</span>
                <h4 className="font-bold my-3">This Service Includes</h4>
                <ul>
                    <li>- lorem ipsum,lorem ipsum</li>
                    <li>- lorem ipsum,lorem ipsum</li>
                    <li>- lorem ipsum,lorem ipsum</li>
                    <li>- lorem ipsum,lorem ipsum</li>
                    <li>- lorem ipsum,lorem ipsum</li>
                    <li>- lorem ipsum,lorem ipsum</li>
                    <li>- lorem ipsum,lorem ipsum</li>

                </ul>
                <Button
                    className="mt-5 w-full block"
                    block
                    loading={isLoading}
                    variant="solid"
                    onClick={() => handlePlan(plan.id)}
                >
                    {isLoading ? 'Redirecting...' : 'Get Started'}
                </Button>

            </Card>
        </div>
    )
}

export default PlansCard

