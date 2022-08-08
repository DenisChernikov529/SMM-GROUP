from pydantic import BaseModel

from typing import Optional


class OrderResponse(BaseModel):
    ordercode: Optional[str]
    msg: Optional[str]
    order_id: Optional[str]
    order_service_id: Optional[str]
