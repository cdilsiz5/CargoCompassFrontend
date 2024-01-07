import React, { useState } from 'react';
import './GetQuote.css'; // CSS dosyasını import edin
import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar';
import Input from '../../Components/Input/Input';
import Spinner from '../../Components/Sprinner/Spinner';
const GetQuote = () => {
    const [form, setForm] = useState({
        description: '',
        userId: '',
        weight: '',
        dimensions: '',
        transportType: '',
        origin: '',
        destination: '',
        estimatedDepartureDate: '',
        estimatedArrivalDate: ''
    });
    const cities = [
        'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya',
        'Artvin', 'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur',
        'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne',
        'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane',
        'Hakkâri', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 'Kars', 'Kastamonu',
        'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya',
        'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu',
        'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat',
        'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray',
        'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır',
        'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
    ];
    const transportOptions = [
        { value: 'TRUCK', label: 'Truck - Suitable for long distances, large cargo capacity.', maxWeight: 30000 },
        { value: 'VAN', label: 'Van - Ideal for small and medium-sized cargos.', maxWeight: 3500 },
        { value: 'CONTAINER', label: 'Container - For international shipping via sea.', maxWeight: 40000 },
        { value: 'FLATBED', label: 'Flatbed - Suitable for heavy and bulky cargos.', maxWeight: 25000 },
        { value: 'OTHER', label: 'Other - For non-standard and special transportation needs.', maxWeight: 0 },
      ];
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false); // Yeni loading state'i
    const onChange = event => {
        event.preventDefault();
        setSuccess(false);
        const { name, value } = event.target;
        const errorsCopy = { ...errors };
        errorsCopy[name] = undefined;
        setErrors(errorsCopy)
        setForm((previousForm) => ({ ...previousForm, [name]: value }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); 
        setTimeout(() => {
            console.log('Form submitted:', form);
            setLoading(false); 
            setSuccess(true);
        }, 2000); 
    };

    return (
        <div>
            <DashboardSidebar />
            <div className="cargo-request-container">
                <form className="cargo-request-form" onSubmit={handleSubmit}>
                    <h2>Cargo Request Form</h2>
                    <Input
                        type="text"
                        name="description"
                        label="Description"
                        error={errors.description}
                        onChange={onChange}
                    />
                    <Input
                        type="number"
                        name="weight"
                        label="Weight"
                        error={errors.weight}
                        onChange={onChange}
                        min="1"
                    />
                    <Input
                        type="text"
                        name="dimensions"
                        label="Dimensions"
                        error={errors.dimensions}
                        onChange={onChange}
                    />
                    <label htmlFor="destination">Destination</label>
                    <select
                        name="destination"
                        value={form.destination}
                        onChange={onChange}
                        className={errors.destination ? 'inputFieldInvalid' : 'inputField'}
                    >
                        <option value="">Select a city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                    {errors.destination && <div className="error">{errors.destination}</div>}
                    <label htmlFor="origin">Origin</label>
                    <select
                        name="origin"
                        value={form.destination}
                        onChange={onChange}
                        className={errors.destination ? 'inputFieldInvalid' : 'inputField'}
                    >
                        <option value="">Select a city</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                    {errors.destination && <div className="error">{errors.destination}</div>}
                    <Input
                        type="date"
                        name="estimatedDepartureDate"
                        label="Estimated Departure Date"
                        error={errors.estimatedDepartureDate}
                        onChange={onChange}
                    />
                    <Input
                        type="date"
                        name="estimatedArrivalDate"
                        label="Estimated Arrival Date"
                        error={errors.estimatedArrivalDate}
                        onChange={onChange}
                    />
                      <label htmlFor="transportType">Transport Type</label>
                    <select
                        name="transportType"
                        value={form.transportType}
                        onChange={e => setForm({ ...form, transportType: e.target.value })}
                        className={form.transportType ? 'inputField' : 'inputFieldInvalid'}
                    >
                        <option value="">Select Transport Type</option>
                        {transportOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    {errors.transportType && <div className="error">{errors.transportType}</div>}
                    <button type="submit"> {loading ? <Spinner /> : 'Submit Request'}</button>
                </form>
            </div>
        </div>
    );
};

export default GetQuote;