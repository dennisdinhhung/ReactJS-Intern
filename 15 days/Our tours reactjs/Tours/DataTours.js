import React, { useEffect, useState } from 'react'
import Tours from './Tours'
import Loading from './loading/Loading';

function DataTours() {
    const [ourTours, setOurTours] = useState()
    const [loading, setLoading] = useState(true)
    console.log("data...", ourTours);

    // useEffect(() => {
    const getData = async () => {
        setLoading(true)
        try {
            const fectData = await fetch('https://course-api.com/react-tours-project')
            const fectDataJson = await fectData.json()
            const tours = fectDataJson
            setOurTours(tours)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    // getData()
    // }, [])

    useEffect(() => {
        getData()
    }, [])


    const remove = (id) => {
        const newData = ourTours.filter((itetm) => itetm.id !== id)
        setOurTours(newData)
    }
    if (loading) {
        return (
            <Loading />
        );
    }
    return (
        <>
            <Tours ourTours={ourTours} remove={remove} getData={getData} loading={loading} />
        </>
    )
}

export default DataTours