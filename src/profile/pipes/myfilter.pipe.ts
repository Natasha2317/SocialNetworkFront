import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(postList, searchStr: string): any[] {
    if (postList.length === 0 || searchStr === '') {
      return postList;
    }
    else {
      let filteredItems = postList.filter(function (post) {
          let fullname = post.title.toLowerCase() + ' ' + post.text.toLowerCase();
          return fullname.indexOf(searchStr.toLowerCase()) !== -1;
        });
      return filteredItems;
    }
  }
}
