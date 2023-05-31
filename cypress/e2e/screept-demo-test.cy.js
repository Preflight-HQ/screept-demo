/* check the documentation if getting errors: https://bit.ly/3LKWTXR */
describe('Add Person | YourWebApp', () => {
  it('Add Person | YourWebApp', () => {
    cy.viewport(1440, 900);
    cy.ai.initAutoheal('jSbjsBpK8obQ');
    cy.visit('https://yourweb.app/#/dashboard');
    cy.ai.ifExists('.max-w-xs>svg', {retryIfNotFound: false})
        .then(el => { if(el) cy.wrap(el).click(); });
    cy.ai.ifExists('button.w-full', {retryIfNotFound: false})
        .then(el => { if(el) cy.wrap(el).click(); });
    cy.ai.get('.max-w>a', {i:4}).click();
    cy.ai.get('#broken', {i:5}).type('{{name.firstName}}');
    cy.ai.get('(//*[@type="text"])[2]', {i:6}).type('{{name.lastName}}');
    cy.ai.get('[type="email"]', {i:7}).type('{{generate.email}}');
    cy.ai.get('[type="password"]', {i:8}).type('123456789');
    cy.ai.get('[type="button"]', {i:9}).click();
    cy.ai.get('//*[text()[contains(., "We’ve sent an email to")]]', {i:10}).should('include.text', 'We’ve sent an email to {{generate.email}}  Go and click a link there to log in.');
    cy.ai.openEmail('Verify your email');
    cy.ai.get('//*[text()[contains(., "https://yourweb.app/#/__auth?m")]]', {i:12, iframe: '.data-box-content>iframe'}).click();
    cy.ai.closeEmail()
    cy.ai.get('//*[text()[contains(., "Email verified successfully!")]]', {i:14}).should('include.text', 'Email verified successfully!');
    cy.ai.get('[type="email"]', {i:15}).type('{{generate.email}}');
    cy.ai.get('[type="password"]', {i:16}).type('123456789');
    cy.ai.get('[type="button"]', {i:17}).click();
    cy.ai.get('.vue-apexcharts', {i:18}).visualCheck('https://preflightuploads.blob.core.windows.net/uploads/38419913-8e7d-4b56-acf0-5e02b3341926');
    cy.ai.get('//*[text()[contains(., "Add Person")]]', {i:19}).click();
    cy.ai.get('div>[type="button"]', {i:20}).click();
    cy.ai.get('//*[text()[contains(., "Please fill all required field")]]', {i:21}).should('include.text', 'Please fill all required fields');
    cy.ai.get('span[type="button"]', {i:22}).click();
    cy.ai.get('[type="file"]', {i:23}).fileUpload({filename: 'testImage.jpg', url: 'https://preflightuploads.blob.core.windows.net/uploads/32bfe963-7775-4380-b178-30cd78a79ee0'});
    cy.ai.get('//span[following-sibling::*[descendant::text()=" Remove "]]', {i:24}).visualCheck('https://preflightuploads.blob.core.windows.net/uploads/2f226069-ce0c-441e-9996-4b8286fb024a', 30);
    cy.ai.get('//*[text()[contains(., "Remove")]]', {i:25}).should('include.text', 'Remove');
  })
});
