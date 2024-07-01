import React, { FC, useState, useEffect } from 'react';
import PixaBayGallery from "./PixaBayGallery";
import { IPixaBayProps } from './IPixaBay';
import axios from 'axios';

interface FormGalleryProps {}

const FormGallery: FC<FormGalleryProps> = () => {

    const [thumbnails, setThumbnails] = useState<IPixaBayProps | null>(null);

    const _imgLinks = [
        { src: './img/bmw_x3_2017.jpg', alt: 'bmw_x3_2017.jpg'}, 
        { src: './img/car_come_soon.jpg', alt: 'car_come_soon.jpg'}, 
        { src: './img/car_icon.jpg', alt: 'car_icon.jpg'}, 
        { src: './img/error404.jpg', alt: 'error404.jpg'}, 
        { src: './img/load.png', alt: 'load.png'}
     ]

    const baseUrl = 'https://pixabay.com/api/?key=43413832-fe65f2aa6c1576afd52610ca6&q=yellow+flowers&image_type=photo'

    const key = '43413832-fe65f2aa6c1576afd52610ca6';
    const client = axios.create({
        baseURL: `https://pixabay.com/api/?key=${key}q=`,
        method: 'get',
        responseType: 'json',
    })

    useEffect(() => {
        axios.get(baseUrl).
        then((response) => { 
            setThumbnails(response.data);
            console.log('response', response)
        }).
        catch((error) => {
           console.log('error', error);
        } )
     }, [])
     
    return (
        <>
            <h2>Axios response {thumbnails?.hits.length}</h2>
            <h3>PixaBay lightGallery Component</h3>
            <PixaBayGallery hits={thumbnails?.hits} />
        </>
    );
}

export default FormGallery;