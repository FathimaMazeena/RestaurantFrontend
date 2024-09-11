import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Add Product Form', function () {
  this.timeout(30000);
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    await driver.quit(); 
  });

  it('should add a new product successfully', async function () {
    
    await driver.get('http://localhost:5173/add-product'); 

    await driver.findElement(By.name('productName')).sendKeys('Test Product');
    await driver.findElement(By.name('description')).sendKeys('This is a test product.');
    await driver.findElement(By.name('price')).sendKeys('10.99');
    await driver.findElement(By.name('currentIngredient')).sendKeys('Sugar');
    await driver.findElement(By.xpath("//button[contains(text(), 'Add Ingredient')]")).click();
    await driver.findElement(By.name('categoryName')).sendKeys('Beverages');
    await driver.findElement(By.name('stockLevel')).sendKeys('50');


    let imageUploadInput = await driver.findElement(By.id('file-input'));
    await imageUploadInput.sendKeys('C:/Users/Mazeena/OneDrive/Desktop/test.png');

    await driver.findElement(By.className('add-product-button')).click();

    try {
        const alert = await driver.wait(until.alertIsPresent(), 10000); 
        const alertText = await alert.getText(); 
        await alert.accept(); 
        expect(alertText).to.include('Product Added Successfully');
      } catch (error) {
        if (error.name === 'UnexpectedAlertOpenError') {

          console.error('An unexpected alert was present:', error.message);
        } else {

          throw error;
        }
      }

  });

  // it('should edit a product successfully', async function () {
  //   await driver.get('http://localhost:5173/products'); 

  //   const editButton = await driver.findElement(By.xpath('//table/tbody/tr[1]//button[contains(@class, "edit-button")]'));
  //   await driver.wait(until.elementIsVisible(editButton), 10000);
  //   await editButton.click();

  //   const productNameInput = await driver.findElement(By.name('productName'));
  //   await productNameInput.clear();
  //   await productNameInput.sendKeys('Updated Test Product');

  //   const descriptionInput = await driver.findElement(By.name('description'));
  //   await descriptionInput.clear();
  //   await descriptionInput.sendKeys('This is an updated test product.');

  //   const priceInput = await driver.findElement(By.name('price'));
  //   await priceInput.clear();
  //   await priceInput.sendKeys('15.99');

  //   const stockLevelInput = await driver.findElement(By.name('stockLevel'));
  //   await stockLevelInput.clear();
  //   await stockLevelInput.sendKeys('100');

  //   const imageInput = await driver.findElement(By.id('file-input'));
  //   await imageInput.sendKeys('C:/Users/Mazeena/OneDrive/Desktop/updatedtest.png'); 

  //   const updateButton = await driver.findElement(By.className('update-product-button'));
  //   await updateButton.click();

  //   const alert = await driver.switchTo().alert();
  //   const alertText = await alert.getText();
  //   await alert.accept();

  //   expect(alertText).to.include('Product Updated Successfully');
  // });



  // it('should delete a product successfully', async function () {
  //   await driver.get('http://localhost:5173/products'); 


  //   const deleteButton = await driver.findElement(By.xpath('//table/tbody/tr[1]//button[contains(@class, "delete-button")]'));
  //   await driver.wait(until.elementIsVisible(deleteButton), 10000);
  //   await deleteButton.click();

 
  //   const alert = await driver.switchTo().alert();
  //   const alertText = await alert.getText();
  //   await alert.accept();

  //   expect(alertText).to.include('Product Deleted Successfully');
  // });

});
