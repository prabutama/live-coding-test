import React from 'react'
import { Link } from 'react-router-dom'

export default function ListMakanan() {

    const dataMakanan = [
        {
            id: 1,
            nama: 'Nasi Goreng',
            harga: 15000,
            deskripsi: 'Nasi goreng lezat dengan ayam',
            asal: 'Jakarta',
        },
        {
            id: 2,
            nama: 'Sate Ayam',
            harga: 20000,
            deskripsi: 'Sate ayam dengan bumbu kacang',
            asal: 'Madura',
        },
        {
            id: 3,
            nama: 'Rendang',
            harga: 35000,
            deskripsi: 'Daging sapi dengan bumbu rendang khas Padang',
            asal: 'Padang',
        },
        {
            id: 4,
            nama: 'Pempek',
            harga: 10000,
            deskripsi: 'Pempek ikan dengan kuah cuka yang khas',
            asal: 'Palembang',
        },
        {
            id: 5,
            nama: 'Gudeg',
            harga: 25000,
            deskripsi: 'Gudeg manis dengan krecek pedas dan nasi hangat',
            asal: 'Yogyakarta',
        },
    ];


    return (
        <>
            <div className='text-3xl bg-teal-500 h-100 w-full px-4 py-4 text-center font-bold text-white'>
                List Makanan di Indonesia
            </div>

            <div className='bg-gray-100 px-10 py-5'>
                {dataMakanan.map((makanan) => (
                    <div key={makanan.id} className='bg-white px-4 py-4 my-3 rounded-md'>
                        <Link className='text-xl font-semibold' to={`/makanan/${makanan.id}`}>Nama : {makanan.nama}</Link>
                        <p>Deskripsi : {makanan.deskripsi}</p>
                        <p>Harga : {makanan.harga}</p>
                        <p>Asal : {makanan.asal}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
