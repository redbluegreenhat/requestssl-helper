/*
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>. 
*/

$(function () {
  
  if (mw.config.get('wgPageName').substring(0, 23) === 'Special:RequestSSLQueue') {
    mw.loader.load('https://cdn.jsdelivr.net/npm/dohjs@0.3.3/dist/doh.min.js');
    let customDomainUrl = new URL(document.getElementById('ooui-php-1').value).host;
    const ValidCNAME = ['mw-lb.miraheze.org'];
    const ValidNS = ['ns1.miraheze.org', 'ns2.miraheze.org'];
    const resolver = new doh.DohResolver('https://1.1.1.1/dns-query');
    resolver.query(customDomainURL, 'A')
      .then(response => {
        response.answers.forEach(ans => console.log(ans.data));
      })
      .catch(err => console.error(err));
  }
}());
