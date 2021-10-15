let PaymentPackage = require('../12.PaymentPackage')
let { expect, assert } = require('chai');


describe('Class tests', () => {

    it('Correct Constructor', () => {

        let payPackage = new PaymentPackage('Stefko', 18);


        assert.equal(payPackage.name, 'Stefko');
        assert.equal(payPackage.value, 18);

        assert.equal(payPackage.active, true);
        assert.equal(payPackage.VAT, 20);
    })

    it('Invalid constructor', () => {

        try {
            let a = new PaymentPackage('Stefko', 's')
        } catch (error) {
            assert.equal('Error: Value must be a non-negative number', error);
        }


        try {
            let a = new PaymentPackage('Stefko', -1)
        } catch (error) {
            assert.equal('Error: Value must be a non-negative number', error);
        }



        try {
            let a = new PaymentPackage(18, 18)
        } catch (error) {
            assert.equal('Error: Name must be a non-empty string', error);
        }

        try {
            let a = new PaymentPackage('', 18)
        } catch (error) {
            assert.equal('Error: Name must be a non-empty string', error);
        }

    })



    describe('Test name', () => {


        it('Invalid name set - not string', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            let result = () => payPackage.name = 20;
            expected = Error

            assert.throws(result, expected);

        })

        it('Invalid name set - empty string', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            let result = () => payPackage.name = '';
            expected = Error

            assert.throws(result, expected);

        })

        it('Correct name set', () => {
            let payPackage = new PaymentPackage('Stefko', 18);
            payPackage.name = 'Stef';

            assert.equal(payPackage.name, 'Stef');

        })



    })

    describe('Test value', () => {

        it('Invalid value set - not number', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            let result = () => payPackage.value = 'John';
            expected = Error

            assert.throws(result, expected);

        })

        it('Invalid value set - value < 0', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            let result = () => payPackage.value = -1;
            expected = Error

            assert.throws(result, expected);

        })

        it('Correct value set', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            payPackage.value = 20;

            assert.equal(payPackage.value, 20);

        })


    })

    describe('Test VAT and active', () => {

        it('Invalid VAT set - not number', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            let result = () => payPackage.VAT = 'John';
            expected = Error

            assert.throws(result, expected);

        })

        it('Invalid VAT set - value < 0', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            let result = () => payPackage.VAT = -1;
            expected = Error

            assert.throws(result, expected);

        })

        it('Invalid active- not boolean', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            let result = () => payPackage.active = -1;
            assert.throws(result, expected);

        })

        it('Correct VAT set', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            payPackage.VAT += 20;

            assert.equal(payPackage.VAT, 40);

        })

        it('Correct active set', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            payPackage.active = false;

            assert.equal(payPackage.active, false);

        })

    })

    describe('Test toString', () => {

        it('Test with active==true', () => {

            let payPackage = new PaymentPackage('Stefko', 18);

            assert.equal(payPackage.toString(),
                'Package: Stefko\n- Value (excl. VAT): 18\n- Value (VAT 20%): 21.599999999999998')

        })

        it('Test with active==true', () => {

            let payPackage = new PaymentPackage('Stefko', 18);
            payPackage.active = false;

            assert.equal(payPackage.toString(),
                'Package: Stefko (inactive)\n- Value (excl. VAT): 18\n- Value (VAT 20%): 21.599999999999998')

        })


    })


    it('Edge cases', () => {

        let payPackage = new PaymentPackage('Stefko', 0);
        assert.equal(payPackage.value, 0)

        payPackage.VAT = 0;
        assert.equal(payPackage.VAT, 0);
    })

})