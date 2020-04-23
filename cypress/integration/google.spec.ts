/// <reference types="cypress" />
import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps';


Given('I visit the site google', ()=>{

    cy.visit('https://www.google.com/')

});

When('I click the search bar and type in cypress',()=>{

    cy.get('.gLFyf').type('cypress')
});

When('I click the search button',()=>{

    cy.get('.FPdoLc > center > .gNO89b').click()

});

Then('I should see results',()=> {

    cy.get('.FPdoLc > center > .gNO89b').click()
});

