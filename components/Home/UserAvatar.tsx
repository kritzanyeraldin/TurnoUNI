import {
  Avatar,
  AvatarFallbackText,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";

const UserAvatar = () => {
  return (
    <Avatar bg="#000000" size="md" borderRadius="$full">
      <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
    </Avatar>
  );
};

export default UserAvatar;
