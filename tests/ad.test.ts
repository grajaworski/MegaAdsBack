import {AdRecord} from "../records/ad.record";

test('AdRecord returns data from database for one entry.',

    async () => {

        const ad = await AdRecord.getOne('abc');

        console.log(ad);

        expect(ad).toBeDefined();
        expect(ad.id).toBe('abc');
        expect(ad.name).toBe('Testowa osoba');
        expect(ad.description).toBe('Testowy opis ogłoszenia sisisisislssls');
    });

test('AdRecord returns null from database for unexisting entry.',

    async () => {

        const ad = await AdRecord.getOne('def');

        expect(ad).toBeNull();


    });
