import { ChangeEvent, useState } from "react";

import { useCartStore } from "@/providers/cart-store.provider";
import { Project } from "@/stores/projects.store";

import localeCurrency from "@/utils/localeCurrency";
import formatedDate from "@/utils/formatedDate";

import countries from "@data/countries.data";

type ProjectItemProps = {
  project: Project;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAmountSelectionActive, setAmountSelection] = useState<boolean>(
    false,
  );

  const [weightValue, setWeightValue] = useState<number>(0);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWeightValue(parseInt(event.target.value));
  };

  return (
    <div className="project">
      <img src={project.image} alt={project.name} />
      <p className="project__description" hidden>
        {project.description}
      </p>
      <h3 className="project__title">{project.name}</h3>
      <ul className="project__details" role="list">
        <li>
          <span className="flag" title={project.country}>
            {(countries as any)[project.country]}
          </span>
          <small className="company-name">
            {project.supplier_name}
          </small>
        </li>
        <li>
          <img
            src="/estimate_time.svg"
            alt="Earliest estimated date"
          />
          <time dateTime={formatedDate(project.earliest_delivery)}>
            {formatedDate(project.earliest_delivery)}
          </time>
        </li>
      </ul>
      <div className="project__action">
        <p className="project__price">
          <span>
            {localeCurrency(project.price_per_ton)}
          </span>
          <i>per ton</i>
        </p>
        <div className="actions">
          {isAmountSelectionActive &&
            (
              <div className="amount-select">
                <span>max. {project.offered_volume_in_tons}</span>
                <span>{weightValue} tons</span>
                <input
                  type="range"
                  min={0}
                  value={weightValue}
                  onChange={handleSliderChange}
                  max={project.offered_volume_in_tons}
                  step="1"
                />
              </div>
            )}
          {isAmountSelectionActive
            ? (
              <button
                className="button btn-icon project__action--cart"
                disabled={weightValue === 0}
                onClick={() => addItem(project, weightValue)}
              >
                <img src="/check.svg" alt="Add item" />
              </button>
            )
            : (
              <button
                className="button project__action--cart"
                onClick={() => setAmountSelection(true)}
              >
                Buy
              </button>
            )}
        </div>
      </div>
    </div>
  );
}
