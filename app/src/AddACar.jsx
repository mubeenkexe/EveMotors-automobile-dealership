import { useState } from "react";
import Header from "./components/Header";
import { FormDashboard } from "./services/Dashboard.service.js";


const AddACar = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [topSpeed, setTopSpeed] = useState('');
    const [power, setPower] = useState('');
    const [torque, setTorque] = useState('');
    const [color, setColor] = useState('');
    const [registeredIn, setRegisteredIn] = useState('');
    const [assembledIn, setAssembledIn] = useState('');
    const [imgLinkOne, setImgLinkOne] = useState('');
    const [imgLinkTwo, setImgLinkTwo] = useState('');
    const [modelLink, setModelLink] = useState('');


    const handleSubmit = async () => {
        const formDataToUpload = new FormData();
        formDataToUpload.append('make', make);
        formDataToUpload.append('model', model);
        formDataToUpload.append('year', year);
        formDataToUpload.append('topSpeed', topSpeed);
        formDataToUpload.append('power', power);
        formDataToUpload.append('torque', torque);
        formDataToUpload.append('color', color);
        formDataToUpload.append('registeredIn', registeredIn);
        formDataToUpload.append('assembledIn', assembledIn);
        formDataToUpload.append('imgLinkOne', imgLinkOne);
        formDataToUpload.append('imgLinkTwo', imgLinkTwo);
        formDataToUpload.append('modelLink', modelLink);

        FormDashboard(formDataToUpload).then((user) => {
            console.log(user);
        })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <Header />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 bg-gray-50">

                <div className="w-11/12 rounded-lg bg-gray-100 m-auto h-fit flex flex-col items-center">
                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Make
                    </label>

                    <input
                        type="text"
                        id="make"
                        placeholder="i.e, Toyota"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setMake}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Model
                    </label>

                    <input
                        type="text"
                        id="model"
                        placeholder="i.e, Corolla"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setModel}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Year
                    </label>

                    <input
                        type="text"
                        id="year"
                        placeholder="i.e, 2017"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setYear}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Top Speed
                    </label>

                    <input
                        type="text"
                        id="topspeed"
                        placeholder="i.e, 210 MPH"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setTopSpeed}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Power
                    </label>
                    <input
                        type="text"
                        id="power"
                        placeholder="i.e, 300 HP"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setPower}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Color
                    </label>
                    <input
                        type="text"
                        id="power"
                        placeholder="i.e, Pearl White"
                        className="p-2 mb-8 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setColor}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                </div>

                <div className="w-11/12 rounded-lg bg-gray-100 m-auto h-fit flex flex-col items-center">

                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Torque
                    </label>

                    <input
                        type="text"
                        id="torque"
                        placeholder="i.e, 20.9 NM"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setTorque}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Registered In
                    </label>

                    <input
                        type="text"
                        id="registeredIn"
                        placeholder="i.e, Islamabad"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setRegisteredIn}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Assembled In
                    </label>

                    <input
                        type="text"
                        id="assembledIn"
                        placeholder="i.e, Japan"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setAssembledIn}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Image's Link
                    </label>

                    <input
                        type="text"
                        id="image"
                        placeholder="1st Link here"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setImgLinkOne}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Image's Link
                    </label>

                    <input
                        type="text"
                        id="image"
                        placeholder="2nd Link here"
                        className="p-2 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setImgLinkTwo}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label className="block text-xs font-medium text-gray-700 mt-8">
                        Model's Link
                    </label>

                    <input
                        type="text"
                        id="3dmodel"
                        placeholder="Link here"
                        className="p-2 mb-8 mt-1 w-4/5 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                        value={setModelLink}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-full flex content-center pt-5 bg-gray-50 mb-8">
                <a
                    href="addacar"
                    className="m-auto w-11/12 text-center inline-block shrink-0 rounded-md border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-red focus:outline-none focus:ring active:text-orange-red"
                    onClick={handleSubmit}
                >
                    Add
                </a>

            </div>
        </>
    );
};

export default AddACar;