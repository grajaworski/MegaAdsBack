import {AdRecord} from "../records/ad.record";
import { AdEntity } from "../types";
import {pool} from "../utils/db";

const defaultObj = {
    name: 'Test Name',
    description: 'Sialalaa',
    url: 'https://megak.pl',
    price: 0,
    lat: 9,
    lon: 9,
};

afterAll(async () => {
   await pool.end();
});

test('AdRecord returns data from database for one entry.',

    async () => {

        const ad = await AdRecord.getOne('abc');

        console.log(ad);

        expect(ad).toBeDefined();
        expect(ad.id).toBe('abc');
        expect(ad.name).toBe('Testowa osoba');
        expect(ad.description).toBe('Testowy opis ogłoszenia sisisisislssls');
    });

test('AdRecord.getOne returns null from database for unexisting entry.',

    async () => {

        const ad = await AdRecord.getOne('def');

        expect(ad).toBeNull();


    });

test('AdRecord.findAll returns array of found entries.',

    async () => {

        const ads = await AdRecord.findAll('');

        expect(ads).not.toEqual([]);
        expect(ads[0].id).toBeDefined();


    });

test('AdRecord.findAll returns array of found entries when searching for "a".',

    async () => {

        const ads = await AdRecord.findAll('a');

        expect(ads).not.toEqual([]);
        expect(ads[0].id).toBeDefined();


    });

test('AdRecord.findAll returns empty array when searching for something that does not exist.',

    async () => {

        const ads = await AdRecord.findAll('----------');

        expect(ads).toEqual([]);


    });

test('AdRecord.findAll returns smaller amount of data.',

    async () => {

        const ads = await AdRecord.findAll('');

        expect((ads[0] as AdEntity).price).toBeUndefined();
        expect((ads[0] as AdEntity).description).toBeUndefined();


    });

test('AdRecord.insert returns new UUID.',

    async () => {

        const ad = new AdRecord(defaultObj);

        await ad.insert();

        expect(ad.id).toBeDefined();
        expect(typeof ad.id).toBe('string');

    });


test('AdRecord.insert inserts data to database.',

    async () => {

        const ad = new AdRecord(defaultObj);

        await ad.insert();

        const foundAd = await AdRecord.getOne(ad.id);

        expect(foundAd).toBeDefined();
        expect(foundAd).not.toBeNull();
        expect(foundAd.id).toBe(ad.id);

    });