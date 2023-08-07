import React from "react";
import { Timeline, Text, Button } from "@mantine/core";

import { PageLayout } from "../components/PageLayout";
import { useSnapshot } from "valtio";
import { config } from "../stores/config-valtio";

export function Home() {
  return (
    <PageLayout className="pt-16">
      <Timeline active={2} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          bullet={1}
          title="First, enter your hosting configuration"
        >
          <Text color="dimmed" size="sm">
            (S3, Azure, GCP, etc.)
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={2}
          title="Next, start creating your environments."
        >
          <Text color="dimmed" size="sm">
            (dev, staging, prod, etc.)
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={3} title="Then, create your feature flags.">
          <Text color="dimmed" size="sm">
            (Toggle, Gradual, Selective, etc.)
          </Text>
        </Timeline.Item>
      </Timeline>
    </PageLayout>
  );
}
