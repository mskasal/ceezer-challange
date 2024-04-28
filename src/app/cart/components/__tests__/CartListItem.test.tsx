import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import CartListItem from "../CartListItem.component";
import useCartStore from "@/stores/cart.store";

const MOCK_ITEM = {
  project: {
    id: 1,
    name: "EverGreen CarbonScape",
    country: "Germany",
    image: "/image.jpg",
    price_per_ton: 650,
    offered_volume_in_tons: 150,
    distribution_weight: 0.05,
    supplier_name: "Klom",
    earliest_delivery: "2023-09-01",
    sdgs: [],
    description: "description",
  },
  amount: 5,
  totalPrice: 50,
};

describe("CartListItem", () => {
  beforeEach(() => {
    useCartStore.getState().addItem(MOCK_ITEM.project, MOCK_ITEM.amount);
  });

  afterEach(cleanup);

  it("should open slider when edit button is clicked", () => {
    render(<CartListItem item={MOCK_ITEM} />);

    const editButton = screen.getByAltText("Edit cart");

    fireEvent.click(editButton);

    const slider = screen.getByRole("slider");

    expect(slider).toBeInTheDocument();
  });

  it("should change amount when slider changes", () => {
    render(<CartListItem item={MOCK_ITEM} />);

    const editButton = screen.getByAltText("Edit cart");

    fireEvent.click(editButton);

    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();

    fireEvent.change(slider, { target: { value: "150" } });

    expect(slider).toHaveValue("150");
  });

  it("should edit item to Cart if 'Accept' button clicked", () => {
    render(<CartListItem item={MOCK_ITEM} />);

    const editButton = screen.getByAltText("Edit cart");
    expect(editButton).toBeInTheDocument();

    fireEvent.click(editButton);

    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();

    fireEvent.change(slider, { target: { value: "100" } });

    const acceptButton = screen.getByAltText("Accept cart");
    expect(acceptButton).toBeInTheDocument();

    fireEvent.click(acceptButton);

    const items = useCartStore.getState().items;
    const storeCartItem = items.find((i) =>
      i.project.id === MOCK_ITEM.project.id
    );

    expect(storeCartItem?.amount).toBe(100);
  });

  it("should call removeItem when 'Remove' button is clicked", () => {
    render(<CartListItem item={MOCK_ITEM} />);

    const removeButton = screen.getByAltText("Remove item");

    fireEvent.click(removeButton);

    const items = useCartStore.getState().items;

    expect(items.length).toBe(0);
  });
});
