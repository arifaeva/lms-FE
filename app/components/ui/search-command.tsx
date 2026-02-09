import { Icon } from "@iconify/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { showSearchCommandAtom } from "app/atoms/search-command.atom";
import { DevscaleIcon } from "app/components/icons/devscale.icon";

import { Command as CommandPrimitive } from "cmdk";
import { motion } from "motion/react";
import { useAtom, useSetAtom } from "jotai";
import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  type ReactElement,
  cloneElement,
} from "react";
import { twMerge } from "tailwind-merge";

const DialogPortal = DialogPrimitive.Portal;
const Dialog = DialogPrimitive.Root;
const Title = DialogPrimitive.Title;
const Empty = CommandPrimitive.Empty;
const List = CommandPrimitive.List;
const Loading = CommandPrimitive.Loading;

const Trigger = ({
  children,
}: {
  children: ReactElement<ComponentPropsWithoutRef<"button">>;
}) => {
  const setOpen = useSetAtom(showSearchCommandAtom);
  const child = cloneElement(children, { onClick: () => setOpen(true) });
  return child;
};

const DialogOverlay = ({
  className,
  children,
  ...props
}: PropsWithChildren<
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>) => (
  <DialogPrimitive.Overlay
    className={twMerge("fixed inset-0 z-40", className)}
    {...props}
  >
    <motion.div
      className="absolute top-0 left-0 z-2 h-full w-full bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.15 }}
    />
    {children}
  </DialogPrimitive.Overlay>
);

const Input = (
  props: ComponentPropsWithoutRef<typeof CommandPrimitive.Input>,
) => (
  <div className="flex items-center gap-2 px-4 py-3">
    <Icon
      width="20px"
      height="20px"
      icon="akar-icons:search"
      className="basis-5 text-neutral-500"
    />
    <CommandPrimitive.Input
      {...props}
      className={twMerge("flex-1 text-base outline-none", props.className)}
      placeholder="Type a command or search..."
    />
  </div>
);

const Item = ({
  className,
  ...props
}: PropsWithChildren<
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>) => (
  <CommandPrimitive.Item
    {...props}
    className={twMerge(
      "group flex items-center gap-3 p-2 text-foreground-secondary",
      className,
    )}
  />
);

const Group = ({
  className,
  ...props
}: PropsWithChildren<
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>) => (
  <CommandPrimitive.Group
    {...props}
    className={twMerge(
      'p-2 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-foreground-muted **:[[cmdk-group-heading]]:text-xss **:[[cmdk-group-heading]]:uppercase [&_[cmdk-item][data-selected="true"]]:bg-brand-surface [&_[cmdk-item][data-selected="true"]]:text-brand',
      className,
    )}
  />
);

const DialogContent = ({
  className,
  children,
  ...props
}: PropsWithChildren<
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={twMerge(
        "-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-50 w-172.5 rounded-lg bg-background transition-all",
        className,
      )}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <Title className="sr-only">Type command or search</Title>
        {children}
      </motion.div>
    </DialogPrimitive.Content>
  </DialogPortal>
);

const Separator = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator
    className={twMerge("-mx-1 h-px bg-border-muted", className)}
    {...props}
  />
);

const Footer = () => (
  <div className="flex items-center justify-between bg-background-muted px-4 py-3 text-foreground-muted text-sm">
    <DevscaleIcon className="h-5 w-min" />
    <div className="flex items-center space-x-2.5">
      <div className="flex items-center space-x-1">
        <span>Navigate</span>
        <Icon
          icon="solar:arrow-up-outline"
          className="h-5 min-h-5 w-5 min-w-5 rounded border border-border p-1"
        />
        <Icon
          icon="solar:arrow-down-outline"
          className="h-5 min-h-5 w-5 min-w-5 rounded border border-border p-1"
        />
      </div>
      <div className="flex items-center space-x-1 text-sm">
        <span>Select</span>
        <kbd className="block rounded border border-border px-2 py-1 font-[inherit] text-xxs">
          Enter
        </kbd>
      </div>
      <div className="flex items-center space-x-1 text-sm">
        <span>Quit</span>
        <kbd className="block rounded border border-border px-2 py-1 font-[inherit] text-xxs">
          Esc
        </kbd>
      </div>
    </div>
  </div>
);

const Command = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const [open, setOpen] = useAtom(showSearchCommandAtom);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <CommandPrimitive
          className="flex h-full w-full flex-col overflow-hidden rounded-md"
          label="Command menu"
        >
          <Input />
          <Separator />
          <List>{children}</List>
          <Separator />
          <Footer />
        </CommandPrimitive>
      </DialogContent>
    </Dialog>
  );
};

export { Item, Group, Trigger, Command, Empty, Loading };
