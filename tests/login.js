module.exports = {
    '	Verify that cursor is focused on “Username” text box' : function (browser) {
      browser
        .url('http://localhost:8888/login')
        .waitForElementVisible('input[name=user_name]')
        .setValue('input[name=user_name]','')
        .click('input[name=user_name]')
        .assert.elementPresent('input[name=user_name]:focus')
        .saveScreenshot(`./output/search.png`)
        .end();
    }
   ,
    ' verify that cursor is focused on “password” text box' : function (browser) {
    
        browser
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='password']",1000)
          .click("input[name='password']")
          .assert.elementPresent("input[name='password']:focus")
          .saveScreenshot(`./output/search.png`)
          .end();
      }
,
      '		Verify that the login screen contains elements ' : function (browser) {
        browser
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']", 1000)
          
         .assert.elementPresent("input[name='user_name']")
          .waitForElementVisible("input[name='password']", 1000)
          .assert.elementPresent("input[name='password']")
          .waitForElementVisible("input[value ='Login']", 1000)
          //.assert.elementPresent("input[name='login']")
          .click("input[value ='Login']")
          .saveScreenshot(`./output/search.png`)
          .end();
      },

      '			Verify that Enter/Tab key works as a substitute focus'
       : function (browser) {
        browser
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[name='user_name']", 1000)
          .pause(5000)
          .click("input[name='user_name']")
          .assert.elementPresent("input[name='user_name']:focus")
          .keys(browser.Keys.TAB)
          //.waitForElementVisible("input[name='password']", 1000)
         // .click("input[name='password']")
          .assert.elementPresent("input[name='password']:focus")
          .keys(browser.Keys.TAB)
          //.waitForElementVisible("input[name='login']", 1000)
          ///.click("input[name='login']")
          .assert.elementPresent("input[value ='Login']:focus")
          .keys(browser.Keys.TAB)
         
          .saveScreenshot(`./output/search.png`)
          .end();
      },
      '			Verify that Error message is display or not '
       : function (browser) {
        browser
          .url('http://localhost:8888/login')
          .waitForElementVisible("input[value ='Login']", 1000)
          .click("input[value ='Login']")
          .assert.elementPresent('h3','Input user name and password to login.')
          .assert.elementPresent('#errormessage','User name or password is not correct.')
          
          .saveScreenshot(`./output/search.png`)
          .end();

       },

       '			Verify that all hiperlink is display & working or not '
       : function (browser) {
        browser
          .url('http://localhost:8888/login')
          .waitForElementVisible('a[href=/register',1000)
         
          .click('a[href=/register]')
          
          .saveScreenshot(`./output/search.png`)
          .end();
       }
   
};