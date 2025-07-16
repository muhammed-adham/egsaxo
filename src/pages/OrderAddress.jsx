import React, { useState, useEffect } from 'react'
import { FaApple } from 'react-icons/fa';
import { HiMiniCreditCard } from 'react-icons/hi2';
import { SiCashapp } from 'react-icons/si';
import './OrderAddress.css'

const OrderAdress = ({ onValidChange }) => {
    // Districts mapping for Egyptian cities
    const cityDistricts = {
        "Cairo": [
            "Downtown Cairo", "Zamalek", "Maadi", "Heliopolis", "Nasr City", "New Cairo",
            "Dokki", "Agouza", "Mohandessin", "Shubra", "Abbassia", "Helwan",
            "Manial", "Garden City", "Kasr El Nile", "Tahrir", "Islamic Cairo",
            "Coptic Cairo", "Sayeda Zeinab", "Rod El Farag", "Shoubra El Kheima",
            "Ain Shams", "Matariya", "Zeitoun", "Hadayek El Kobba", "Waily",
            "Darb El Ahmar", "Gamaleya", "Khalifa", "Mokattam", "Masr El Gedida",
            "Nozha", "Sahel", "Shubra Misr", "Warraq", "Imbaba"
        ],
        "Alexandria": [
            "Raml Station", "Sidi Gaber", "Sporting", "Gleem", "Cleopatra", "Stanley",
            "Montazah", "Mandara", "Asafra", "Miami", "Sidi Bishr", "Victoria",
            "Camp Caesar", "Kafr Abdo", "Smouha", "Fleming", "Bacchus", "Schutz",
            "Hadara", "Wardian", "Amreya", "Borg El Arab", "Dekheila", "Agami",
            "Hannoville", "Marina", "Alamein", "Sidi Abdel Rahman", "Moharam Bek",
            "Attarin", "Gomrok", "Anfushi", "Ras El Tin", "Karmous", "Laban"
        ],
        "Giza": [
            "Dokki", "Agouza", "Mohandessin", "Zamalek", "6th of October City",
            "Sheikh Zayed", "Haram", "Faisal", "Omraniya", "Bulaq El Dakrour",
            "Imbaba", "Kit Kat", "Warraq", "Moneeb", "Sakiat Mekki", "Tersa",
            "Badrashin", "Atfih", "Saff", "Dahshur", "Mazghuna", "Ayat",
            "Hawamdeya", "Badrshein", "Manshiet El Qanater", "Abu Rawash",
            "Kerdasa", "Abu Ghalib", "Nahya", "Oseem", "Auseem", "Mit Rahina"
        ],
        "Shubra El-Kheima": [
            "Shubra El Kheima", "Shubra Misr", "Shubra El Balad", "Shubra El Qadima",
            "Shubra El Gedida", "Shubra Qism Awal", "Shubra Qism Thani", "Shubra El Mazalat",
            "Shubra El Nakhl", "Shubra El Kharraba", "Shubra El Salam", "Shubra El Nour"
        ],
        "Port Said": [
            "Port Said", "Port Fouad", "Arab", "Sharq", "Zuhur", "Manakh",
            "Ganoub", "Dawahi", "Mubarak", "El Zohour", "El Arab", "El Manakh",
            "El Sharq", "El Ganoub", "El Dawahi", "El Mubarak"
        ],
        "Suez": [
            "Suez", "Ataka", "Arbaeen", "Ganayen", "Suez El Gedida", "Suez El Qadima",
            "Feisal", "Ataqah", "El Arbaeen", "El Ganayen", "El Suez El Gedida",
            "El Suez El Qadima", "El Feisal", "El Ataqah"
        ],
        "Luxor": [
            "Luxor", "Karnak", "East Bank", "West Bank", "Valley of the Kings",
            "Valley of the Queens", "Deir el-Medina", "Medinet Habu", "Ramesseum",
            "Esna", "Edfu", "Kom Ombo", "Aswan", "Abu Simbel"
        ],
        "Mansoura": [
            "Mansoura", "Talkha", "Dekernes", "Aga", "Minyat el Nasr", "Sherbin",
            "Matariya", "Belqas", "Gamasa", "Mansoura El Gedida", "Mansoura El Qadima",
            "Mansoura El Sharq", "Mansoura El Gharb", "Mansoura El Shamal", "Mansoura El Ganoub"
        ],
        "El-Mahalla El-Kubra": [
            "El-Mahalla El-Kubra", "Kafr el-Zayat", "Qutour", "Tanta", "Zifta",
            "Mehalla El Kubra", "Mehalla El Sughra", "Mehalla El Gedida", "Mehalla El Qadima",
            "Mehalla El Sharq", "Mehalla El Gharb", "Mehalla El Shamal", "Mehalla El Ganoub"
        ],
        "Tanta": [
            "Tanta", "Kafr el-Zayat", "Qutour", "Mahalla", "Zifta", "Samannud",
            "Tanta El Gedida", "Tanta El Qadima", "Tanta El Sharq", "Tanta El Gharb",
            "Tanta El Shamal", "Tanta El Ganoub", "Tanta El Markaz", "Tanta El Mahata"
        ]
    };

    // Postal codes mapping for districts
    const districtPostalCodes = {
        // Cairo districts
        "Downtown Cairo": "11511", "Zamalek": "11211", "Maadi": "11728", "Heliopolis": "11341",
        "Nasr City": "11371", "New Cairo": "11835", "Dokki": "12311", "Agouza": "12411",
        "Mohandessin": "12411", "Shubra": "11241", "Abbassia": "11381", "Helwan": "11421",
        "Manial": "11451", "Garden City": "11461", "Kasr El Nile": "11511", "Tahrir": "11511",
        "Islamic Cairo": "11511", "Coptic Cairo": "11511", "Sayeda Zeinab": "11411",
        "Rod El Farag": "11241", "Shoubra El Kheima": "13511", "Ain Shams": "11566",
        "Matariya": "11411", "Zeitoun": "11411", "Hadayek El Kobba": "11241", "Waily": "11511",
        "Darb El Ahmar": "11511", "Gamaleya": "11511", "Khalifa": "11511", "Mokattam": "11571",
        "Masr El Gedida": "11341", "Nozha": "11341", "Sahel": "11341", "Shubra Misr": "11241",
        "Warraq": "12655", "Imbaba": "12655",

        // Alexandria districts
        "Raml Station": "21511", "Sidi Gaber": "21411", "Sporting": "21311", "Gleem": "21311",
        "Cleopatra": "21311", "Stanley": "21311", "Montazah": "21526", "Mandara": "21526",
        "Asafra": "21526", "Miami": "21526", "Sidi Bishr": "21526", "Victoria": "21411",
        "Camp Caesar": "21411", "Kafr Abdo": "21411", "Smouha": "21648", "Fleming": "21648",
        "Bacchus": "21648", "Schutz": "21648", "Hadara": "21648", "Wardian": "21648",
        "Amreya": "23511", "Borg El Arab": "23511", "Dekheila": "23511", "Agami": "23511",
        "Hannoville": "23511", "Marina": "23511", "Alamein": "23511", "Sidi Abdel Rahman": "23511",
        "Moharam Bek": "21511", "Attarin": "21511", "Gomrok": "21511", "Anfushi": "21511",
        "Ras El Tin": "21511", "Karmous": "21511", "Laban": "21511",

        // Giza districts
        "Dokki": "12311", "Agouza": "12411", "Mohandessin": "12411", "Zamalek": "11211",
        "6th of October City": "12566", "Sheikh Zayed": "12588", "Haram": "12556",
        "Faisal": "12556", "Omraniya": "12556", "Bulaq El Dakrour": "12556", "Imbaba": "12655",
        "Kit Kat": "12655", "Warraq": "12655", "Moneeb": "12556", "Sakiat Mekki": "12556",
        "Tersa": "12556", "Badrashin": "12556", "Atfih": "12556", "Saff": "12556",
        "Dahshur": "12556", "Mazghuna": "12556", "Ayat": "12556", "Hawamdeya": "12556",
        "Badrshein": "12556", "Manshiet El Qanater": "12556", "Abu Rawash": "12556",
        "Kerdasa": "12556", "Abu Ghalib": "12556", "Nahya": "12556", "Oseem": "12556",
        "Auseem": "12556", "Mit Rahina": "12556"
    };


    // Add district to formData
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        district: '',
        postalCode: '',
        country: 'Egypt',
        notes: ''
    });

    // Add availableDistricts state
    const [availableDistricts, setAvailableDistricts] = useState([]);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Refactored handleInputChange
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "city") {
            setAvailableDistricts(cityDistricts[value] || []);
            setFormData(prev => ({
                ...prev,
                city: value,
                district: '',
                postalCode: ''
            }));
            // Clear city, district, and postalCode errors if any
            setErrors(prev => ({
                ...prev,
                city: '',
                district: '',
                postalCode: ''
            }));
            return;
        }

        if (name === "district") {
            setFormData(prev => ({
                ...prev,
                district: value,
                postalCode: districtPostalCodes[value] || ''
            }));
            // Clear district and postalCode errors if any
            setErrors(prev => ({
                ...prev,
                district: '',
                postalCode: ''
            }));
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.district.trim()) newErrors.district = 'District is required';
        if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
        if (!formData.country.trim()) newErrors.country = 'Country is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            alert('Order placed successfully! You will receive a confirmation email shortly.');
            // In real app, redirect to order confirmation page
        } catch (error) {
            alert('There was an error placing your order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Notify parent about validity whenever formData changes
    useEffect(() => {
        if (onValidChange) {
            onValidChange(validateForm());
        }
        // eslint-disable-next-line
    }, [formData]);

    return (
        <>
            <div className="checkout-content">
                {/* Left Column - Form */}
                <div className="checkout-form-section">
                    <form onSubmit={handleSubmit} className="checkout-form">
                        {/* Shipping Information */}
                        <div className="form-section">
                            <h2>Delivery Info</h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={errors.firstName ? 'error' : ''}
                                    />
                                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={errors.lastName ? 'error' : ''}
                                    />
                                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={errors.email ? 'error' : ''}
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={errors.phone ? 'error' : ''}
                                    />
                                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Street Address *</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className={errors.address ? 'error' : ''}
                                />
                                {errors.address && <span className="error-message">{errors.address}</span>}
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City *</label>
                                    <select
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className={errors.city ? 'error' : ''}
                                    >
                                        <option value="">Select City</option>
                                        <option value="Cairo">Cairo</option>
                                        <option value="Giza">Giza</option>
                                        <option value="Alexandria">Alexandria</option>
                                        {/* <option value="Shubra El-Kheima">Shubra El-Kheima</option> */}
                                        {/* <option value="Port Said">Port Said</option>
                      <option value="Suez">Suez</option>
                      <option value="Luxor">Luxor</option>
                      <option value="Mansoura">Mansoura</option>
                      <option value="El-Mahalla El-Kubra">El-Mahalla El-Kubra</option>
                      <option value="Tanta">Tanta</option>
                      <option value="Asyut">Asyut</option>
                      <option value="Ismailia">Ismailia</option>
                      <option value="Fayyum">Fayyum</option>
                      <option value="Zagazig">Zagazig</option>
                      <option value="Aswan">Aswan</option>
                      <option value="Damietta">Damietta</option>
                      <option value="Damanhur">Damanhur</option>
                      <option value="Minya">Minya</option>
                      <option value="Beni Suef">Beni Suef</option>
                      <option value="Qena">Qena</option>
                      <option value="Sohag">Sohag</option>
                      <option value="Hurghada">Hurghada</option>
                      <option value="6th of October City">6th of October City</option>
                      <option value="Shibin El Kom">Shibin El Kom</option>
                      <option value="Banha">Banha</option>
                      <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
                      <option value="Arish">Arish</option>
                      <option value="Mallawi">Mallawi</option>
                      <option value="10th of Ramadan City">10th of Ramadan City</option>
                      <option value="Bilbais">Bilbais</option>
                      <option value="Marsa Matruh">Marsa Matruh</option>
                      <option value="Idfu">Idfu</option>
                      <option value="Mit Ghamr">Mit Ghamr</option>
                      <option value="Al-Hamidiyya">Al-Hamidiyya</option>
                      <option value="Desouk">Desouk</option>
                      <option value="Qalyub">Qalyub</option>
                      <option value="Abu Kabir">Abu Kabir</option>
                      <option value="Kafr el-Dawwar">Kafr el-Dawwar</option>
                      <option value="Girga">Girga</option>
                      <option value="Akhmim">Akhmim</option>
                      <option value="Matareya">Matareya</option> */}
                                    </select>
                                    {errors.city && <span className="error-message">{errors.city}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="district" className="required">District/Area</label>
                                    <select
                                        id="district"
                                        name="district"
                                        value={formData.district}
                                        onChange={handleInputChange}
                                        required
                                        disabled={!formData.city || availableDistricts.length === 0}
                                        className={errors.district ? 'error' : ''}
                                    >
                                        <option value="">{formData.city ? 'Select District' : 'Select city first'}</option>
                                        {availableDistricts.map((district) => (
                                            <option key={district} value={district}>{district}</option>
                                        ))}
                                    </select>
                                    {errors.district && <span className="error-message">{errors.district}</span>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="postalCode">Postal Code *</label>
                                <input
                                    type="text"
                                    id="postalCode"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleInputChange}
                                    className={errors.postalCode ? 'error' : ''}
                                />
                                {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="country">Country *</label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className={errors.country ? 'error' : ''}
                                    disabled
                                >
                                    <option value="Egypt" defaultChecked>Egypt</option>
                                </select>
                                {errors.country && <span className="error-message">{errors.country}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="notes">Order Notes (Optional)</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    rows="3"
                                    placeholder="Special instructions for delivery..."
                                />
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="form-section">
                            <h2>Payment Method</h2>
                            <div className="payment-methods">
                                <div className="payment-method disabled">
                                    <div className="payment-method-header">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="card"
                                            disabled
                                            id="card"
                                        />
                                        <label htmlFor="card" className="payment-label">
                                            <div className="payment-icon"><HiMiniCreditCard /></div>
                                            <div className="payment-info">
                                                <span className="payment-name">Credit/Debit Card</span>
                                                <span className="payment-description">Visa, Mastercard, American Express</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="payment-disabled-message">
                                        <span>Coming Soon</span>
                                    </div>
                                </div>

                                <div className="payment-method disabled">
                                    <div className="payment-method-header">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="paypal"
                                            disabled
                                            id="paypal"
                                        />
                                        <label htmlFor="paypal" className="payment-label">
                                            <div className="payment-icon"><FaApple /></div>
                                            <div className="payment-info">
                                                <span className="payment-name">Apple Pay</span>
                                                <span className="payment-description">Pay with Apple Pay</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="payment-disabled-message">
                                        <span>Coming Soon</span>
                                    </div>
                                </div>

                                <div className="payment-method active">
                                    <div className="payment-method-header">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            defaultChecked
                                            id="cod"
                                        />
                                        <label htmlFor="cod" className="payment-label">
                                            <div className="payment-icon"><SiCashapp /></div>
                                            <div className="payment-info">
                                                <span className="payment-name">Cash on Delivery</span>
                                                <span className="payment-description">Pay when you receive your order</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="payment-enabled-message">
                                        <span>✓ Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>


            </div>
        </>
    )
}

export default OrderAdress