"use client";
import { Flex, Text, Button, Tabs, Box, Card, Avatar } from "@radix-ui/themes";

export default function MyApp() {
	return (
    <>
    <Box maxWidth="240px">
	<Card>
		<Flex gap="3" align="center">
			<Avatar
				size="3"
				src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
				radius="full"
				fallback="T"
			/>
			<Box>
				<Text as="div" size="2" weight="bold">
					Teodros Girmay
				</Text>
				<Text as="div" size="2" color="gray">
					Engineering
				</Text>
			</Box>
		</Flex>
	</Card>
</Box>
<Tabs.Root defaultValue="account">
	<Tabs.List>
		<Tabs.Trigger value="account">Account</Tabs.Trigger>
		<Tabs.Trigger value="documents">Documents</Tabs.Trigger>
		<Tabs.Trigger value="settings">Settings</Tabs.Trigger>
	</Tabs.List>

	<Box pt="3">
		<Tabs.Content value="account">
			<Text size="2">Make changes to your account.</Text>
		</Tabs.Content>

		<Tabs.Content value="documents">
			<Text size="2">Access and update your documents.</Text>
		</Tabs.Content>

		<Tabs.Content value="settings">
			<Text size="2">Edit your profile or update contact information.</Text>
		</Tabs.Content>
	</Box>
  
</Tabs.Root>

</>
	);
}
