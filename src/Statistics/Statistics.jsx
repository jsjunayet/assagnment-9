import { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, } from 'recharts';

const Statistics = () => {
    const [pie, setpie] = useState([])
    useEffect(() => {
        const conGet = JSON.parse(localStorage.getItem("donate"));
        setpie(conGet)
    }, [])


    const donate = ((pie.length * 100) / 12);

    const total = (100 - donate);




    const data01 = [
        { name: '%', value: total },
        { name: '%', value: donate },

    ];
    const COLORS = ['#FF444A', '#0088FE'];
    return (
        <div className='flex justify-center items-center'>
            <div className=''>
                <PieChart width={500} height={400}>
                    <Pie
                        data={data01}
                        cx="50%"
                        cy="60%"
                        labelLine={true}
                        label
                        outerRadius={80}
                        fill="#00C49F"
                        dataKey="value"
                    >
                        {data01.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className='md:flex gap-5 ml-20'>
                    <div className='flex gap-2 items-center'>
                        <p className='text-xl text-[#0B0B0B]'>Your Donation</p>
                        <div className='h-2 w-20 bg-[#0088FE] mt-1 rounded-sm'>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <p className='text-xl text-[#0B0B0B]'>Total Donation</p>
                        <div className='h-2 w-20 bg-[#FF444A] mt-1 rounded-sm'>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Statistics;