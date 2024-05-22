import { HeaderProps, NavigatorsType } from "@/types/types";

export const NavigationComponent = ({ navigators, navigate }: HeaderProps) => {
  return (
    <div className="flex flex-row w-full justify-around">
      {navigators.map((navigator: NavigatorsType, index: number) => (
        <p
          key={index}
          className="text-sm text-neutral-100 font-montserrat"
          onClick={() => navigate(navigator.navigation)}
        >
          {navigator.title}
        </p>
      ))}
    </div>
  );
};
