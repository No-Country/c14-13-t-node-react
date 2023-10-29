-- DropForeignKey
ALTER TABLE "OrderService" DROP CONSTRAINT "OrderService_order_id_fkey";

-- AddForeignKey
ALTER TABLE "OrderService" ADD CONSTRAINT "OrderService_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
