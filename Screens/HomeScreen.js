import React from 'react';
import {
	Text,
	Center,
	Heading,
	VStack,
	HStack,
	Box,
	FlatList,
	Avatar,
	Spacer,
	Container,
} from 'native-base';

export default function HomeScreen({ coins }) {
	const topCoins = coins.slice(0, 10);
	return (
		<VStack bg="black" safeArea>
			<Box>
				<Center pb="5" pt="3" color="gray.900">
					<Heading fontSize="xl" pt="6">
						<Text color="warning.600" fontSize="2xl">
							Top 10 Crypto Currencies
						</Text>
					</Heading>
				</Center>
				<FlatList
					data={topCoins}
					renderItem={({ item }) => (
						<Box
							borderBottomWidth="1"
							borderColor="warning.600"
							pl="5"
							pr="5"
							py="3"
						>
							<HStack space={3} justifyContent="space-between">
								<Avatar
									size="50px"
									source={{
										uri: item.image,
									}}
								/>
								<VStack>
									<Text color="primary.50">{item.name}</Text>
									<Text color="primary.50">{item.symbol}</Text>
								</VStack>
								<Spacer />
								<Text fontSize="xs" color="primary.50">
									{item.current_price} USD
								</Text>
							</HStack>
						</Box>
					)}
					keyExtractor={(item) => item.id}
				/>
			</Box>
		</VStack>
	);
}
