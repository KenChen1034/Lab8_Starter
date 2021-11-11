// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//test for phoneNumber
test('888-123-6101 to be a valid phone number', ()=>{
    let number = '888-123-6101';
    expect(functions.isPhoneNumber(number)).toBe(true);
});

test('(123)321-4321 to be valid phone number', ()=> {
    let number = '(123)321-4321';
    expect(functions.isPhoneNumber(number)).toBe(true);
});

test('1233214321 to be valid phone number', ()=> {
    let number = '1233214321';
    expect(functions.isPhoneNumber(number)).toBe(false);
});

test('abc-321-4321 to be invalid phone number', ()=> {
    let number = '4321';
    expect(functions.isPhoneNumber(number)).toBe(false);
});


//test for Email

test('yic006@ucsd.edu to be a valid email', ()=> {
    let email = 'yic006@ucsd.edu';
    expect(functions.isEmail(email)).toBe(true);
});

test('tado@gmail.com to be a valid email', ()=> {
    let email = 'tado@gmail.com';
    expect(functions.isEmail(email)).toBe(true);
});

test('1@dawdawda.comccc to be a invalid email', ()=> {
    let email = '1@dawdawda.comccc';
    expect(functions.isEmail(email)).toBe(false);
});

test('somethingwrong.com to be a invalid email', ()=> {
    let email = 'somethingwrong.com';
    expect(functions.isEmail(email)).toBe(false);
});

//test for strongPassword
test('Cy10886099 is a strong password', ()=>{
    let pw = 'Cy10886099';
    expect(functions.isStrongPassword(pw)).toBe(true);
});

test('Aa_3 is a strong password', ()=> {
    let pw = 'Aa_3';
    expect(functions.isStrongPassword(pw)).toBe(true);
});

test('1a_3 is not a strong password', ()=> {
    let pw = '1a_3';
    expect(functions.isStrongPassword(pw)).toBe(false);
});

test('a1234567890000000 is not a strong password', ()=> {
    let pw = 'a1234567890000000';
    expect(functions.isStrongPassword(pw)).toBe(false);
});

//test for Date
test('12/29/2000 is a valid date', ()=>{
    let date = '12/29/2000';
    expect(functions.isDate(date)).toBe(true);
});
test('12/42/2000 is a valid date', ()=>{
    let date = '12/2/2000';
    expect(functions.isDate(date)).toBe(true);
});
test('12/29/200011 is not a valid date', ()=>{
    let date = '12/42/200011';
    expect(functions.isDate(date)).toBe(false);
});
test('12/ac/2000 is a not valid date', ()=>{
    let date = '1/1/20';
    expect(functions.isDate(date)).toBe(false);
});

//test for HexColor
test('#fff is a valid hex color', ()=> {
    let color = '#fff';
    expect(functions.isHexColor(color)).toBe(true);
});

test('#fff123 is a valid hex color', ()=> {
    let color = '#fff123';
    expect(functions.isHexColor(color)).toBe(true);
});

test('#fff2 is not a valid hex color', ()=> {
    let color = '#fff2';
    expect(functions.isHexColor(color)).toBe(false);
});

test('zzz is not a valid hex color', ()=> {
    let color = 'zzz';
    expect(functions.isHexColor(color)).toBe(false);
});