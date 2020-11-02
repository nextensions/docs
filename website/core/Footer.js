/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + "docs/" + (language ? language + "/" : "") + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + "/" : "") + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={this.props.config.baseUrl} className='nav-home'>
            {this.props.config.footerIcon && (
              <img src={this.props.config.baseUrl + this.props.config.footerIcon} alt={this.props.config.title} width='66' height='58' />
            )}
          </a>
          <div>
            <h5>คู่มือ</h5>
            <a href={this.docUrl('manual.html')}>โรงเรียน/สถานศึกษา</a>
            <a href={this.docUrl('manual.html#สำหรับครูอาจารย์')}>ครูอาจารย์/บุคลากร</a>
            <a href={this.docUrl('manual.html#สำหรับผู้ปกครอง')}>ผู้ปกครอง/นักเรียน</a>
          </div>
          <div>
            <h5>คุณสมบัติ</h5>
            <a href={this.docUrl('clockin.html')}>ระบบบันทึกเวลา</a>
            <a href={this.docUrl('scaninclass.html')}>ระบบเช็คชื่อรายวิชา</a>
            <a href={this.docUrl('foodcourt.html')}>ระบบศูนย์อาหาร</a>
          </div>
          <div>
            <h5>อื่นๆ</h5>
            {/* <a href={this.props.config.baseUrl + 'blog'}>Blog</a> */}
            <a href='https://www.nextschool.io/?ref=docs'>Nextschool.io</a>
          </div>
        </section>

        <a href='https://code.facebook.com/projects/' target='_blank' className='fbOpenSource'>
          <img src={this.props.config.baseUrl + 'img/oss_logo.png'} alt='Facebook Open Source' width='170' height='45' />
        </a>
        <section className='copyright'>Copyright &copy; {currentYear} Nextgensoft Co., Ltd.</section>
      </footer>
    );
  }
}

module.exports = Footer;
