import {Component, Input, OnInit} from '@angular/core';
import {ChatRoom} from '../../../../../shared/interfaces/chat-room';

@Component({
  selector: 'chat-room-card',
  templateUrl: './chat-room-card.component.html',
  styleUrls: ['./chat-room-card.component.scss']
})
export class ChatRoomCardComponent implements OnInit {
  @Input() room: ChatRoom;

  constructor() { }

  ngOnInit() {
  }

  truncateText(str: string, maxLen = 20, separator = ' '): string {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

}
