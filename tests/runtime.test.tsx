import * as React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axe from "axe-core";
import { Button } from "../src/components/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../src/components/tabs";
import { AIStatus } from "../src/components/ai-status";
import { EmptyState } from "../src/patterns/empty-state";

describe("Parchment runtime evidence", () => {
  it("exposes loading state semantics and disables Button", () => {
    render(<Button loading>Generate</Button>);
    const button = screen.getByRole("button", { name: /loading/i });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("supports keyboard movement through Radix Tabs", async () => {
    const user = userEvent.setup();
    render(<Tabs defaultValue="one"><TabsList aria-label="Views"><TabsTrigger value="one">One</TabsTrigger><TabsTrigger value="two">Two</TabsTrigger></TabsList><TabsContent value="one">First</TabsContent><TabsContent value="two">Second</TabsContent></Tabs>);
    const one = screen.getByRole("tab", { name: "One" });
    const two = screen.getByRole("tab", { name: "Two" });
    one.focus();
    await user.keyboard("{ArrowRight}");
    expect(two).toHaveFocus();
  });

  it("announces AI lifecycle state semantically", () => {
    render(<AIStatus state="processing" label="Generating" />);
    expect(screen.getByRole("status")).toHaveTextContent("Generating");
  });

  it("passes an axe smoke scan for representative runtime states", async () => {
    const { container } = render(<main><Button>Continue</Button><EmptyState heading="No items" description="Create your first item." /></main>);
    const result = await axe.run(container);
    expect(result.violations).toEqual([]);
  });
});
