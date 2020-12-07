const automator = require('miniprogram-automator')

describe('index', () => {
  let miniProgram
  let page

  beforeAll(async () => {
    miniProgram = await automator.launch({
      cliPath: 'D:\Tencent\微信web开发者工具//cli.bat',
      projectPath: 'D:\Projects\ProjectCatalyst\frontend\kang\WechatMiniProgram'
    })
    page = await miniProgram.reLaunch('/pages/distribution/brand/brand_report')
    await page.waitFor(500)
  }, 30000)

  it('代理商筛选', async () => {
    const page = await miniProgram.currentPage()
    const desc = await page.$('.brand')
    expect(desc.tagName).toBe('view')
    expect(await desc.text()).toContain('代理商筛选')
    await desc.tap()
    await page.waitFor(3000)
  })

  // it('供应商大数据分析', async () => {
  //   const page = await miniProgram.currentPage()
  //   const desc = await page.$('picker')
  //   await desc.tap()
  //   await page.waitFor(2000)
  //   const checkBox = await page.$('checkbox')
  //   console.log(checkBox.property('checked'));
    
  //   // await checkBox.tap()
  // })

  afterAll(async () => {
     await miniProgram.disconnect()
  })
})