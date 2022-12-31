import { Spinner } from 'components/ui'
import React, { useEffect, useState } from 'react'
import { apiGetPlans } from 'services/PlansServies'
import PlansCard from './PlansCard'


const Plans = () => {

    const [plans, setPlans] = useState(null)

    useEffect(() => {
        apiGetPlans().then(res => {
            setPlans(res.data.data);
        })
    }, [])

    return (
        <>
            <div className="mb-8">
                <h3 className="mb-1 mx-auto ">Plans</h3>
                <div className='mt-5 mx-auto'>
                    <div className="mx-auto content-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {!plans ? <Spinner></Spinner> :
                            plans?.map(plan => <PlansCard key={plan.id} plan={plan}></PlansCard>)
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Plans