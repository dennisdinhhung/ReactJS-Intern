import styles from './countryinforStyle.module.scss'
import clsx from 'clsx'
import { ThemeContext } from '../../ThemeContext/Themecontext'
import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

function CountryInfor() {
    const themeContext = useContext(ThemeContext);
    const country = useSelector(state => state.Countries.country);
    const [countriesBorder, setCountriesBoder] = useState([]);

    const getLanguages = (country) => {
        let result = '';
        country.languages.forEach(languages => {
            if (result !== '') {
                result = result + '-' + languages.name
            } else {
                result += languages.name
            }
        })
        return result;
    }


    return (
        <div className={styles.countryInfor}>
            {
                country && (
                    <>
                        <h3 className={styles.coutryName}>{country.capital}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.countryInfor__title}>Native Name</td>
                                    <td>:</td>
                                    <td className={styles.countryInfor__value}>{country.nativeName}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfor__title}>Officail</td>
                                    <td>:</td>
                                    <td className={styles.countryInfor__value}>{country.altSpellings}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfor__title}>Population</td>
                                    <td>:</td>
                                    <td className={styles.countryInfor__value}>{country.population}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfor__title}>Region</td>
                                    <td>:</td>
                                    <td className={styles.countryInfor__value}>{country.region}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfor__title}>Sub Region</td>
                                    <td>:</td>
                                    <td className={styles.countryInfor__value}>{country.subregion}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfor__title}>Capital</td>
                                    <td>:</td>
                                    <td className={styles.countryInfor__value}>{country.capital}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfor__title}>Top Level Domain</td>
                                    <td>:</td>
                                    <td className={styles.countryInfor__value}>{country.topLevelDomain[0]}</td>
                                </tr>
                                <tr>
                                    <td className={styles.countryInfor__title}>Languages</td>
                                    <td>:</td>
                                    <td className={styles.countryInfor__value}>{getLanguages(country)}</td>
                                </tr>

                            </tbody>
                        </table>
                    </>
                )
            }
        </div>
    )
}
export default CountryInfor