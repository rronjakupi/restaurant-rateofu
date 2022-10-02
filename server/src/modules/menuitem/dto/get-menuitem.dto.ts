import { IsNotEmpty } from 'class-validator';
import { MenuItem } from '../entities/menuitem.entity';

export class GetMenuItemRequestDto {
  @IsNotEmpty()
  id: string;
}

export class GetMenuItemResponseDto {
  item_id: string;
  item_title: string;
  item_price: number;
  item_description: string;
  item_image: string;
  item_type: string;
}